export default class {
	constructor(id, note) {
		this.id = id;
		this.note = note;
		this.active = false;
		this.node = null;
	}

	update(touches) {
		let active = this.hitsAny(touches);
		this.node.style.backgroundColor = this.getColor(active);
		this.active = active;
	}

	hitsAny(touches) {
		for (let t of touches) {
			let elt = document.elementFromPoint(t.pageX, t.pageY);
			if (elt && elt.id == this.id) {
				return true;
			}
		}
		return false;
	}

	getColor(active) {
		return active ? "green" : "lightgreen";
	}
}
