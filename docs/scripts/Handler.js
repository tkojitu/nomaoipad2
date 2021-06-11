export default class {
	init() {
		this.listen(document.getElementById("board"));
	}

	listen(elt) {
		elt.addEventListener("touchstart", evt => this.onTouchStart(evt), {passive: false});
		elt.addEventListener("touchend", evt => this.onTouchEnd(evt), {passive: false});
		elt.addEventListener("touchmove", evt => this.onTouchMove(evt), {passive: false});
		elt.addEventListener("touchcancel", evt => this.onTouchCancel(evt), {passive: false});
	}

	onTouchStart(evt) {
		console.log("start " + evt.target.innerHTML);
	}

	onTouchEnd(evt) {
		console.log("end " + evt.target.innerHTML);
	}

	onTouchMove(evt) {
		console.log("move " + evt.target.innerHTML);
	}

	onTouchCancel(evt) {
		console.log("cancel " + evt.target.innerHTML);
	}
}
