export default class {
	constructor(id, note) {
		this.id = id;
		this.note = note;
		this.active = false;
		this.node = null;
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
}
