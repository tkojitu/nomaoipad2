export default class {
	constructor(board) {
		this.board = board;
	}

	init() {
		this.initGridLayout();
		this.board.addPads();
	}

	initGridLayout() {
		let rule = document.styleSheets[0].cssRules[0];
		rule.style.gridTemplateRows = this.board.getGridTemplateRows();
		rule.style.gridTemplateColumns = this.board.getGridTemplateColumns();
	}
}
