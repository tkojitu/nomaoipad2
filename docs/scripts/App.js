export default class {
	constructor(board, handler) {
		this.board = board;
		this.handler = handler;
	}

	init() {
		this.initGridLayout();
		this.board.addPads();
		this.handler.init();
	}

	initGridLayout() {
		let rule = document.styleSheets[0].cssRules[0];
		rule.style.gridTemplateRows = this.board.getGridTemplateRows();
		rule.style.gridTemplateColumns = this.board.getGridTemplateColumns();
	}
}
