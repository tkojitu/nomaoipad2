export default class {
	constructor() {
		this.size = "";
		this.pads = [];
	}

	parse(text) {
		let lines = text.split("\n");
		this.size = lines.shift();
		this.pads = lines.map(function(ln) {return ln.split(/\s+/)});
	}

	getSize() {
		return this.size;
	}

	getPads() {
		return this.pads;
	}
}
