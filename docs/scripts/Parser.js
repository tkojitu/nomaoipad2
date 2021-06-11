import Pad from "./Pad.js";

export default class {
	constructor() {
		this.size = "";
		this.pads = [];
		this.layouts = [];
	}

	getSize() {
		return this.size;
	}

	getPads() {
		return this.pads;
	}

	parse() {
		let layouts = document.getElementById("layouts");
		for (let layout of layouts.children) {
			this.layouts.push(this.parseLayout(layout));
		}
		this.pads = this.layouts[0];
	}

	parseLayout(layout) {
		let lines = layout.innerHTML.trim().split("\n");
		this.size = lines.shift();
		let notes = lines.map(ln => ln.split(/\s+/));
		let n = 0;
		return notes.map(row => row.map(note => new Pad("p" + n++, note)));
	}
}
