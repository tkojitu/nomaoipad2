export default class {
	constructor(id, note) {
		this.id = id;
		this.note = note;
		this.active = false;
		this.node = null;
	}

	update(active) {
		this.node.style.backgroundColor = this.getColor(active);
		this.active = active;
	}

	getColor(active) {
		return active ? "green" : "lightgreen";
	}
}
