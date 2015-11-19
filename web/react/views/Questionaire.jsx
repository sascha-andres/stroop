"use strict";

define(["react", "mixins/Navigation"], function (React, Navigation) {
	return React.createClass({
		mixins: [Navigation],
		
		render: function() {
			return (
			 <div className="centeredText">
					<p>Bitte fahren Sie nun fohrt mit dem Ausfüllen des Fragebogens. Auf Anweisung des Instruktors bitte auf 'Weiter' drücken.</p>
					<br />
					<button className="btn btn-default" onClick={this.moveNext}>Weiter</button>
				</div>
			);
		}
	});
});
