export default class {
	constructor(size, pads) {
		this.padSize = size;
		this.pads = pads;
		this.touches = [];
	}

	init() {
		this.initGridLayout();
		this.addPads();
		this.listen(document.getElementById("board"));
	}

	initGridLayout() {
		let rule = document.styleSheets[0].cssRules[0];
		rule.style.gridTemplateRows = this.getGridTemplateRows();
		rule.style.gridTemplateColumns = this.getGridTemplateColumns();
	}

	getRowSize() {
		return this.pads.length;
	}

	getColumnSize() {
		return this.pads[0].length;
	}

	getGridTemplateRows() {
		return this.iterateSize(this.getRowSize());
	}

	getGridTemplateColumns() {
		return this.iterateSize(this.getColumnSize());
	}
	
	iterateSize(n) {
		let buf = "";
		for (let i = 0; i < n; ++i) {
			buf += " " + this.padSize;
		}
		return buf.trim();
	}

	addPads() {
		let parent = document.getElementById("board");
		let n = 0;
		for (let row of this.pads) {
			for (let pad of row) {
				let child = document.createElement("div");
				child.id = pad.id;
				child.className = "pad";
				child.innerHTML = pad.note;
				parent.appendChild(child);
				pad.node = child;
			}
		}
	}

	listen(elt) {
		elt.addEventListener("touchstart", evt => this.onTouchStart(evt), {passive: false});
		elt.addEventListener("touchend", evt => this.onTouchEnd(evt), {passive: false});
		elt.addEventListener("touchmove", evt => this.onTouchMove(evt), {passive: false});
		elt.addEventListener("touchcancel", evt => this.onTouchEnd(evt), {passive: false});
	}

	onTouchStart(evt) {
		evt.preventDefault();
		for (let t of evt.changedTouches) {
			this.pushTouch(t);
		}
		this.updatePads();
	}

	pushTouch(touch) {
		this.touches.push(this.copyTouch(touch));
	}

	copyTouch(touch) {
		return {
			identifier: touch.identifier,
			pageX: touch.pageX,
			pageY: touch.pageY
		};
	}

	updatePads() {
		for (let row of this.pads) {
			for (let pad of row) {
				pad.update(this.touches);
			}
		}
	}

	onTouchMove(evt) {
		evt.preventDefault();
		for (let t of evt.changedTouches) {
			let idx = this.getTouchIndex(t);
			if (idx < 0) {
				continue;
			}
			this.touches.splice(idx, 1, this.copyTouch(t));
		}
		this.updatePads();
	}

	getTouchIndex(touch) {
		return this.touches.findIndex((t) => touch.identifier == t.identifier);
	}

	onTouchEnd(evt) {
		evt.preventDefault();
		for (let t of evt.changedTouches) {
			let idx = this.getTouchIndex(t);
			if (idx < 0) {
				continue;
			}
			this.touches.splice(idx, 1);
		}
		this.updatePads();
	}
}
