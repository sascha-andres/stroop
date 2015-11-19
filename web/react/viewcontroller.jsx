"use strict";

define(["react", "models/config", "views/Empty", "views/Introduction", "views/StroopDemo", "views/Audio", "views/Podcast", "views/Test", "views/PinCode", "views/ThankYou", "views/Questionaire", "views/StroopExplanation"], function (React, Config, Empty, Introduction, StroopDemo, Audio, Podcast, Test, PinCode, ThankYou, Questionaire, StroopExplanation) {
	return React.createClass({
	
		move: function(viewName) {
			Config.state.view = viewName;
			this.setState({ viewName: viewName });
		},
	
		getView: function() {
		
			console.log(Config.state.view);
		
			if ( Config.state.view === "Introduction" ) {
				return ( <Introduction moveNext={this.move} movePrevious={this.move} /> );
			}
			
			if ( Config.state.view === "StroopDemo" ) {
				return ( <StroopDemo moveNext={this.move} movePrevious={this.move} /> );
			}
			
			if ( Config.state.view === "Audio" ) {
				return ( <Audio moveNext={this.move} movePrevious={this.move} /> );
			}
			
			if ( Config.state.view === "Podcast" ) {
				return ( <Podcast moveNext={this.move} movePrevious={this.move} /> );
			}
			
			if ( Config.state.view === "Test" ) {
				return ( <Test moveNext={this.move} movePrevious={this.move} /> );
			}
			
			if ( Config.state.view === "PinCode" ) {
				return ( <PinCode moveNext={this.move} movePrevious={this.move} /> );
			}
			
			
			if ( Config.state.view === "Questionaire" ) {
				return ( <Questionaire moveNext={this.move} movePrevious={this.move} /> );
			}
			
			if ( Config.state.view === "StroopExplanation" ) {
				return ( <StroopExplanation moveNext={this.move} movePrevious={this.move} /> );
			}
			
			if ( Config.state.view === "ThankYou" ) {
			  $.ajax({
					url: "/post.php",
					type: "POST",
					contentType: "application/json",
					data: JSON.stringify(Config),
					dataType: 'json',
					success: function(data) {
						var st = this.state;
						st.testResults = [];
						this.setState(st);
					}.bind(this),
					error: function(xhr, status, err) {
						console.error("post.php", status, err.toString());
					}.bind(this)
				});
				return ( <ThankYou moveNext={this.move} movePrevious={this.move} /> );
			}
			
			return ( <Empty /> );
		},
		
		// write out the view
		render: function() {
			return this.getView();
		}
	});
});