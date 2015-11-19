"use strict";

define(["react", "mixins/Navigation", "models/config"], function (React, Navigation, Config) {
	return React.createClass({
		mixins: [Navigation],
		
		getInitialState: function() {
			return {
				code: ""
			};
		},
		
		textChange: function(event) {
				Config.state.code = event.target.value;
				this.setState({code: event.target.value});
		},
		
		render: function() {
			var button;
			console.log( this.state.code.length );
			if ( this.state.code.length == 8 ) {
				button = <button className="btn btn-default" onClick={this.moveNext}>Weiter</button>;
			}
		  return (
				<div className="centeredText">
					<p>Bitte tragen Sie hier Ihren persönlichen Code ein. 
					<br />
					Zur Erinnerung: dieser setzt sich zusammen aus den Anfangsbuchstaben des Namens Ihrer Mutter, den Anfangsbuchstaben des Namens Ihres Vaters und Ihrem Geburtsjahr
					<br />
					Bsp. Mutter: Maria; Vater: Peter; Geburtsjahr: 2000</p>
					<br />
					<input  className="form-control" placeholder="Ihr Code: MAPE2000" type="text" value={this.state.code} onChange={this.textChange} />
					<br />
					<br />
					{button}
				</div>
			);
		}
	});
});