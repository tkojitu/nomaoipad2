export default class {
	constructor(id, note, nid, juke) {
		this.id = id;
		this.note = note;
		this.nid = nid;
		this.juke = juke
		this.active = false;
		this.node = null;
		this.emitter = juke.newEmitter(nid);
	}

	update(touches) {
		let active = this.hitsAny(touches);
		this.node.style.backgroundColor = this.getColor(active);
		if (this.active == active) {
			return;
		}
		if (active) {
			this.emitter.noteOn();
		} else {
			this.emitter.noteOff();
		}
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
