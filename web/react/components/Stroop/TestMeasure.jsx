"use strict";

define(["react", "components/Stroop/TestColorVisualizer", "components/Stroop/TestHelp", "mixins/StroopHandling"], function (React, StroopTestColorVisualizer, StroopTestHelp, StroopHandling) {
	return React.createClass({
		mixins: [StroopHandling],
		
		componentDidMount: function() {
			console.log("-- TestMeasure: componentDidMount --");
		},
	
		componentWillUnmount: function() {
			console.log("-- TestMeasure: componentWillUnmount --");
		},
		
		handleClick: function(color) {
			console.log("-- TestMeasure: handleClick "+color+" --");
			
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
		
		render: function() {
			return (
				<div>
					<StroopTestColorVisualizer colorName={this.state.currentDisplayColor} colorClass={this.state.currentColor} />
					<StroopTestHelp colorClick={this.handleClick} />
				</div>
			);
		}
	});
});