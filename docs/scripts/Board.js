import Handler from "./Handler.js";

export default class {
	constructor(size, pads) {
		this.padSize = size;
		this.pads = pads;
	}

	init() {
		this.initGridLayout();
		this.addPads();
		this.initHandlers();
	}

	initGridLayout() {
		let rule = document.styleSheets[0].cssRules[0];
		rule.style.gridTemplateRows = this.getGridTemplateRows();
		rule.style.gridTemplateColumns = this.getGridTemplateColumns();
	}

	getRowSize() {
		return this.pads.length;
	}

	getColumnSize() {
		return this.pads[0].length;
	}

	getGridTemplateRows() {
		return this.iterateSize(this.getRowSize());
	}

	getGridTemplateColumns() {
		return this.iterateSize(this.getColumnSize());
	}
	
	iterateSize(n) {
		let buf = "";
		for (let i = 0; i < n; ++i) {
			buf += " " + this.padSize;
		}
		return buf.trim();
	}

	addPads() {
		let parent = document.getElementById("board");
		let n = 0;
		for (let row of this.pads) {
			for (let pad of row) {
				let child = document.createElement("div");
				child.id = "p" + n++;
				child.className = "pad";
				child.innerHTML = pad;
				parent.appendChild(child);
			}
		}
	}

	initHandlers() {
		let board = document.getElementById("board");
		for (let i = 0; i < board.children.length; ++i) {
			let handler = new Handler();
			handler.listen(board.children[i]);
		}
	}
}
