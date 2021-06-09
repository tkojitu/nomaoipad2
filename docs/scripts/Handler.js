export default class {
	init() {
		let me = this;
		let board = document.getElementById("board");
		for (let i = 0; i < board.children.length; ++i) {
			board.children[i].addEventListener(
				"touchstart",
				function(event) {
					me.onTouchStart(event);
				},
				false);
		}
	}

	onTouchStart(event) {
		alert(event);
	}
}
