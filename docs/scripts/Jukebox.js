import Emitter from "./Emitter.js";

export default class {
	constructor() {
		this.ax = new AudioContext();
		this.gain = this.connectGain();
	}

	connectGain() {
		let gain = this.ax.createGain();
		gain.gain.value = 0.5;
		gain.connect(this.ax.destination);
		return gain;
	}

	newEmitter(nid) {
	 return new Emitter(nid, this);
	}

	startOscillator(freq) {
		let osc = this.makeOscillator(freq);
		osc.connect(this.gain);
		osc.start();
		return osc;
	}

	makeOscillator(freq) {
		let osc = this.ax.createOscillator();
		osc.type = "square";
		osc.frequency.value = freq;
		return osc;
	}

	stopOscillator(osc) {
		osc.stop();
		osc.disconnect();
	}
}
