export default class {
	constructor(board) {
		this.board = board;
		this.pressing = false;
		this.touches = [];
	}

	init() {
		this.addTouchListeners();
		this.addMouseListeners();
		this.addLayoutMenuListener();
		this.addPadSizeMenuListener();
	}

	addTouchListeners() {
		let elt = document.getElementById("board");
		elt.addEventListener("touchstart", evt => this.onTouchStart(evt), {passive: false});
		elt.addEventListener("touchend", evt => this.onTouchEnd(evt), {passive: false});
		elt.addEventListener("touchmove", evt => this.onTouchMove(evt), {passive: false});
		elt.addEventListener("touchcancel", evt => this.onTouchEnd(evt), {passive: false});
	}

	addMouseListeners() {
		let elt = document.getElementById("board");
		elt.addEventListener("mousedown", evt => this.onMouseDown(evt), {passive: false});
		elt.addEventListener("mouseup", evt => this.onMouseUp(evt), {passive: false});
		elt.addEventListener("mousemove", evt => this.onMouseMove(evt), {passive: false});
		elt.addEventListener("mouseleave", evt => this.onMouseUp(evt), {passive: false});
	}

	addLayoutMenuListener() {
		let elt = document.getElementById("layoutMenu");
		elt.addEventListener("change", evt => this.onChangeLayoutMenu(evt), false);
	}

	addPadSizeMenuListener() {
		let elt = document.getElementById("padSizeMenu");
		elt.addEventListener("change", evt => this.onChangePadSizeMenu(evt), false);
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
		this.board.updatePads(this.touches);
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

	onMouseDown(evt) {
		evt.preventDefault();
		this.pressing = true;
		this.pushTouch(evt);
		this.updatePads();
	}

	onMouseMove(evt) {
		evt.preventDefault();
		if (!this.pressing) {
			return;
		}
		this.touches.splice(0, 1, this.copyTouch(evt));
		this.updatePads();
	}

	onMouseUp(evt) {
		evt.preventDefault();
		this.pressing = false;
		this.touches.splice(0, 1);
		this.updatePads();
	}

	onChangeLayoutMenu(evt) {
		this.board.changeLayout(evt.target.value);
	}

	onChangePadSizeMenu(evt) {
		this.board.changePadSize(evt.target.value);
	}
}
