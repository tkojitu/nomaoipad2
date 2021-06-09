import App from "./App.js";
import Board from "./Board.js";
import Container from "./Container.js";
import Handler from "./Handler.js";
import PadText from "./PadText.js";
import Parser from "./Parser.js";

window.addEventListener(
	"load",
	function() {
		let c = new Container();
		c.define(
			"app",
			function(c) {
				return new App(c.geti("board"), c.geti("handler"));
			});
		c.define(
			"board",
			function(c) {
				let parser = c.geti("parser");
				parser.parse(c.geti("padtext").getText());
				return new Board(parser.getSize(), parser.getPads());
			});
		c.define(
			"parser",
			function(c) {
				return new Parser();
			});
		c.define(
			"padtext",
			function(c) {
				return new PadText();
			});
		c.define(
			"handler",
			function(c) {
				return new Handler();
			});
		c.geti("app").init();
	});
