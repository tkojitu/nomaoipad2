# nomaoipad2

A pad instrument.

[Demo](https://tkojitu.github.io/nomaoipad2/)

## To Do

	+ Add layouts.
	- Add menu to change pad size.
	- Layout pads.
	  - Decide layout syntax.
	    - row
	    - column
	    - size
	  - Parse layout string.
	  - Write layout css.
	  - Write pads html.
	- Handle events.
	  - Add event callbacks to the board.
	    - touchstart.
	    - touchend.
	    - touchmove.
	    - touchcancel.
	  - Change pad colors.
	- Sound notes.
	  - Convert note string to note id.
	  - Create a oscillator when a pad becomes active and start it.
	  - Stop the oscillator when the pad becomes inactive and forget it.
	- Use hidden div for note layout.
