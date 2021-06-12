export default class {
	constructor(pid, nid, juke) {
		this.pid = pid;
		this.nid = nid;
		this.juke = juke;
	}

	noteOn() {
		console.log("note on " + this.nid);
		this.juke.noteOn(this.pid, this.nid);
	}

	noteOff() {
		console.log("note off " + this.nid);
		this.juke.noteOff(this.pid, this.anode);
	}
}
