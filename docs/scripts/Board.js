export default class {
	constructor(layouts) {
		this.layouts = layouts;
		this.pads = layouts[0];
		this.padSize = "100px";
		this.touches = [];
	}

	init() {
		this.updatePadSize();
		this.updateLayout();
		this.initGridLayout();
		this.addPads();
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
				child.id = pad.pid;
				child.className = "pad";
				child.innerHTML = pad.note;
				parent.appendChild(child);
				pad.node = child;
			}
		}
	}

	updatePads(touches) {
		for (let row of this.pads) {
			for (let pad of row) {
				pad.update(touches);
			}
		}
	}

	changePadSize(size) {
		this.padSize = size;
		this.initGridLayout();
	}

	updatePadSize() {
		let sz = this.getSelectedPadSize();
		if (!sz) {
			return;
		}
		this.padSize = sz;
	}

	getSelectedPadSize() {
		let sel = document.getElementById("padSizeMenu");
		for (let opt of sel.children) {
			if (opt.selected) {
				return opt.value;
			}
		}
		return null;
	}

	changeLayout(index) {
		this.clearPads();
		this.init();
	}

	clearPads() {
		let board = document.getElementById("board");
		while (board.firstChild) {
			board.removeChild(board.firstChild);
		}
	}

	updateLayout() {
		let idx = this.getSelectedLayoutIndex();
		if (idx < 0) {
			return;
		}
		this.pads = this.layouts[idx];
	}

	getSelectedLayoutIndex() {
		let sel = document.getElementById("layoutMenu");
		for (let opt of sel.children) {
			if (opt.selected) {
				return parseInt(opt.value);
			}
		}
		return null;
	}
}
