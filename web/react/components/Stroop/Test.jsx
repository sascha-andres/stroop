"use strict";

define(["react", "components/Stroop/TestTimed", "components/Stroop/TestMeasure"], function (React, StroopTestTimed, StroopTestMeasure) {
	return React.createClass({
	
		pushTestResultHandler: function(result) {
			 this.props.pushTestResultHandler(result);
		},
		
		testDoneHandler: function() {
			this.props.testDoneHandler();
		},
		
		render: function() {
			if ( this.props.timedTest === "true" ) {
				return (
					<StroopTestTimed 	testType={this.props.testType} 
														factor={this.props.factor} 
														numberOfIterations={this.props.numberOfIterations} 
														pushTestResultHandler={this.pushTestResultHandler}
														testDoneHandler={this.testDoneHandler} />
				);
			} else {
				return (
					<StroopTestMeasure 	testType={this.props.testType} 
															factor={this.props.factor} 
															numberOfIterations={this.props.numberOfIterations} 
															pushTestResultHandler={this.pushTestResultHandler}
															testDoneHandler={this.testDoneHandler} />
				);
			}
		}
	});
});