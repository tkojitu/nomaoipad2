export default class {
	constructor(board, listener) {
		this.board = board;
		this.listener = listener;
	}

	init() {
		this.board.init();
		this.listener.init();
	}
}
