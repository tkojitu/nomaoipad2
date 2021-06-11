export default class {
	init() {
		this.touches = [];
		this.listen(document.getElementById("board"));
	}

	listen(elt) {
		elt.addEventListener("touchstart", evt => this.onTouchStart(evt), {passive: false});
		elt.addEventListener("touchend", evt => this.onTouchEnd(evt), {passive: false});
		elt.addEventListener("touchmove", evt => this.onTouchMove(evt), {passive: false});
		elt.addEventListener("touchcancel", evt => this.onTouchCancel(evt), {passive: false});
	}

	onTouchStart(evt) {
		evt.preventDefault();
		for (let t of evt.changedTouches) {
			this.pushTouch(t);
		}
		console.log("start " + evt.target.innerHTML);
	}

	pushTouch(touch) {
		this.touches.push(Object.assign({}, touch));
	}

	onTouchMove(evt) {
		evt.preventDefault();
		for (let t of evt.changedTouches) {
			let idx = this.getTouchIndex(t);
			if (idx < 0) {
				continue;
			}
			this.touches.splice(idx, 1, Object.assign({}, t));
		}
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
		console.log("end " + evt.target.innerHTML);
	}

	onTouchCancel(evt) {
		evt.preventDefault();
		console.log("cancel " + evt.target.innerHTML);
	}
}
