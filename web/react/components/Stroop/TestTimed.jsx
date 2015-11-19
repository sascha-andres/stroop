"use strict";

define(["react", "components/Stroop/TestColorVisualizer", "components/Stroop/TestHelp", "mixins/StroopHandling", "models/config"], function (React, StroopTestColorVisualizer, StroopTestHelp, StroopHandling, Config) {
	return React.createClass({
		mixins: [StroopHandling],
		
		componentDidMount: function() {
			console.log("-- TestTimed: componentDidMount --");
			this.timer = setInterval(this.tick, 100);
		},
	
		componentWillUnmount: function() {
			console.log("-- TestTimed: componentWillUnmount --");
			clearInterval(this.timer);
		},
		
		handleClick: function(color) {
			console.log("-- TestTimed: handleClick "+color+" --");
			
			if ( color === "r" ) {
				this.rHandler();
			}
			
			if ( color === "g" ) {
				this.gHandler();
			}
			
			if ( color === "b" ) {
				this.bHandler();
			}
			
			if ( color === "y" ) {
				this.yHandler();
			}
		},
	
		tick: function() {
			if ( this.state.isBlack && this.state.ticks >= Config.prefs.stroopBlackTicks ) {
				this.calculateState();
			} else {
				if ( !this.state.isBlack && this.state.ticks >= Config.prefs.stroopTicks ) {
					this.keyHandler("X");
					this.calculateState();
				}
			}
			
			this.setState({ ticks: this.state.ticks+1});
					
			if ( this.state.currentTest + 1 == this.props.numberOfIterations ) {
				this.props.testDoneHandler();
			}
		},
		
		render: function() {
			if ( this.state.isBlack ) {
				// the helpbox should not move
				var marginStyle = {
					marginTop: '130px'
				}
				return (
					<div>
						<StroopTestHelp isBlack={this.state.isBlack} colorClick={this.handleClick} />
					</div>
				);
			} else {
				return (
					<div>
						<StroopTestColorVisualizer colorName={this.state.currentDisplayColor} colorClass={this.state.currentColor} />
						<StroopTestHelp colorClick={this.handleClick} />
					</div>
				);
			}
		}
	});
});