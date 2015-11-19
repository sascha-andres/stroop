"use strict";

define(["react", "models/config", "components/Stroop/Test", "mixins/Navigation"], function (React, Config, StroopTest, Navigation) {
	return React.createClass({
		mixins: [Navigation],
		
		getInitialState: function () {
			return {
				nextVisible: false
			};
		},
		
		pushTestResultHandler: function(result) {
			 Config.stroopResults.push(result);
		},
		
		testDoneHandler: function() {
		  if ( Config.state.view === "StroopDemo" ) {
				//this.moveNext();
			}
		},
		
		componentDidMount: function () {
			this.timer = setInterval(this.tick, 60000);
		},
		
		componentWillUnmount: function () {
			clearInterval(this.timer);
		},
		
		tick: function() {
				this.setState({ nextVisible: true });
    },
		
		render: function() {
			var test;
			if ( Config.prefs.stroopTestType === "timed" ) {
				test = <StroopTest timedTest="true" 
											testType={Config.prefs.demoTestType} 
											factor={Config.prefs.demoFactor} 
											testName="Demo"
											numberOfIterations={Config.prefs.demoNumberOfIterations}
											pushTestResultHandler={this.pushTestResultHandler}
											testDoneHandler={this.testDoneHandler} />;
			} else {
				test = <StroopTest timedTest="false" 
											testType={Config.prefs.demoTestType} 
											factor={Config.prefs.demoFactor}
											testName="Demo" 
											numberOfIterations={Config.prefs.demoNumberOfIterations}
											pushTestResultHandler={this.pushTestResultHandler}
											testDoneHandler={this.testDoneHandler} />;
			}
			var button;
			if ( this.state.nextVisible ) {
				button = <div className="buttonDiv"><button className="btn btn-default center" onClick={this.moveNext}>Weiter</button></div>;
				test = null;
			}
			return (
				<div className="centeredText">
					{test}
					<br /><br/>
					{button}
				</div>
			);
		}
	});
});