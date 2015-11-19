"use strict";

define(["react", "mixins/Navigation", "components/videoplayer"], function (React, Navigation, VideoPlayer) {
	return React.createClass({
		mixins: [Navigation],
		
		render: function() {
				return (
					<div className="centeredText">
						Bevor Sie mit der Aufgabe beginnen, warten Sie, bis der Versuchsleiter Sie dazu auffordert.<br/><br/>
						<button className="btn btn-default" onClick={this.moveNext}>Weiter</button>
					</div>
				);
		}
	});
});