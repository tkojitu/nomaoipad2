import App from "./App.js";
import Board from "./Board.js";
import Container from "./Container.js";
import Listener from "./Listener.js";
import Parser from "./Parser.js";

window.addEventListener(
	"load",
	function() {
		let c = new Container();
		c.define(
			"app",
			c => new App(c.geti("board"), c.geti("listener")));
		c.define(
			"board",
			c => {
				let parser = c.geti("parser");
				parser.parse();
				return new Board(parser.getSize(), parser.getPads());
			});
		c.define(
			"parser",
			c => new Parser());
		c.define(
			"listener",
			c => new Listener(c.geti("board")));
		c.geti("app").init();
	});
