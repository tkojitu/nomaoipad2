export default class {
	constructor(nid, juke) {
		this.nid = nid;
		this.juke = juke;
		this.anode = null;
	}

	noteOn() {
		console.log("note on " + this.nid);
		this.anode = this.juke.startAudioNode(this.nid);
	}

	noteOff() {
		console.log("note off " + this.nid);
		this.juke.stopAudioNode(this.anode);
		this.anode = null;
	}
}
