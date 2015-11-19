"use strict";

define(["react", "mixins/Navigation"], function (React, Navigation) {
	return React.createClass({
		mixins: [Navigation],
		
		render: function() {
			return (
				<div className="centeredText">
					<p>Im Folgenden werden Sie eine Reihe von Farbwörtern präsentiert bekommen. Ihre Aufgabe besteht darin, die Farbwörter zu identifizieren und die entsprechende Taste so schnell wie möglich zu drücken.</p>
					<p>Wichtig ist, dass Sie die geschriebene Farbe, nicht die angezeigte Farbe des Wortes identifizieren.</p>
					<p>Zum Beispiel: wenn das Wort Rot in gelber Farbe geschrieben ist, wählen sie die Farbe rot aus. Wenn Sie die Aufgabe verstanden haben, drücken Sie die Weiter Taste um einen Testdurchlauf zu starten.</p>
					<br />
					<button className="btn btn-default" onClick={this.moveNext}>Weiter</button>
				</div>
			);
		}
	});
});