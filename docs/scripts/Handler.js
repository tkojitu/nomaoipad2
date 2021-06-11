export default class {
	init() {
		this.touches = [];
		this.listen(document.getElementById("board"));
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
		console.log("start " + evt.target.innerHTML);
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
		let board = document.getElementById("board");
		for (let pad of board.children) {
			pad.style.backgroundColor = this.getPadColor(this.hitsPad(pad));
		}
	}

	hitsPad(pad) {
		for (let t of this.touches) {
			let elt = document.elementFromPoint(t.pageX, t.pageY);
			if (elt && elt.id == pad.id) {
				return true;
			}
		}
		return false;
	}

	getPadColor(hit) {
		if (hit) {
			return "green";
		} else {
			return "lightgreen";
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
		console.log("move " + evt.target.innerHTML);
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
		console.log("end " + evt.target.innerHTML);
	}
}
