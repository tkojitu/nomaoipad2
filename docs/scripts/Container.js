export default class {
	constructor() {
		this.services = [];
		this.instances = [];
	}

	define(name, fn) {
		this.services[name] = fn;
	}

	geti(name) {
		if (this.instances[name]) {
			return this.instances[name];
		}
		let fn = this.services[name];
		this.instances[name] = fn(this);
		return this.instances[name];
	}
}
