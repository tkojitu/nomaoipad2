export default class {
	constructor(board) {
		this.board = board;
		this.touches = [];
	}

	init() {
		let elt = document.getElementById("board");
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
		this.updateBoard();
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

	updateBoard() {
		this.board.update(this.touches);
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
		this.updateBoard();
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
		this.updateBoard();
	}
}
