import Board from "./Board.js";
import Container from "./Container.js";
import Jukebox from "./Jukebox.js";
import Listener from "./Listener.js";
import Parser from "./Parser.js";

window.addEventListener(
	"load",
	function() {
		let c = new Container();
		c.define(
			"board",
			c => {
				let parser = c.geti("parser");
				return new Board(c.geti("jukebox"), parser.parse());
			});
		c.define(
			"parser",
			c => new Parser(c.geti("jukebox")));
		c.define(
			"listener",
			c => new Listener(c.geti("board")));
		c.define(
			"jukebox",
			c => new Jukebox());
		c.geti("board").init();
		c.geti("listener").init();
	});
