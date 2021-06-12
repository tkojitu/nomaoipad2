export default class {
	constructor(pid, note, nid, juke) {
		this.pid = pid;
		this.note = note;
		this.nid = nid;
		this.juke = juke
		this.active = false;
		this.node = null;
	}

	update(touches) {
		let active = this.hitsAny(touches);
		this.node.style.backgroundColor = this.getColor(active);
		if (this.active == active) {
			return;
		}
		if (active) {
			this.juke.noteOn(this.pid, this.nid);
		} else {
			this.juke.noteOff(this.pid);
		}
		this.active = active;
	}

	hitsAny(touches) {
		for (let t of touches) {
			let elt = document.elementFromPoint(t.pageX, t.pageY);
			if (elt && elt.id == this.pid) {
				return true;
			}
		}
		return false;
	}

	getColor(active) {
		return active ? "green" : "lightgreen";
	}
}
