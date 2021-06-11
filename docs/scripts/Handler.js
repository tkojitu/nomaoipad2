export default class {
	init() {
		let board = document.getElementById("board");
		for (let i = 0; i < board.children.length; ++i) {
			board.children[i].addEventListener(
				"touchstart",
				evt => this.onTouchStart(event),
				{passive: false});
		}
	}

	onTouchStart(evt) {
		evt.preventDefault();
		alert(event);
	}
}
