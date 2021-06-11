export default class {
	constructor(board, handler) {
		this.board = board;
		this.handler = handler;
	}

	init() {
		this.board.init();
		this.handler.init();
	}
}
