import Pad from "./Pad.js";

export default class {
	constructor() {
		this.size = "";
		this.pads = [];
	}

	parse(text) {
		let lines = text.split("\n");
		this.size = lines.shift();
		let notes = lines.map(ln => ln.split(/\s+/));
		let n = 0;
		this.pads = notes.map(row => row.map(note => new Pad("p" + n++, note)));
	}

	getSize() {
		return this.size;
	}

	getPads() {
		return this.pads;
	}
}
