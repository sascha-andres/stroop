"use strict";

define(["react", "mixins/Navigation", "models/config", "components/Stroop/Test", "components/videoplayer"], function (React, Navigation, Config, StroopTest, VideoPlayer) {
	return React.createClass({
		mixins: [Navigation],
		
		getInitialState: function() {
			var newDate = new Date();
			return {
				startTime: newDate.timeNow()
			};
		},
		
		pushTestResultHandler: function(result) {
			 Config.stroopResults.push(result);
		},
		
		videoEnd: function() {
			var newDate = new Date();
			Config.state.stopTime = newDate.timeNow();
			Config.state.startTome = this.state.startTime;
			this.moveNext();
		},
		
		testDoneHandler: function() {
		  // unused, runs forever
			//if ( Config.state.view === "Test" ) {
			//	this.moveNext();
			//}
		},
		
		render: function() {
		  var stroop;
			if ( Config.prefs.stroopTestType === "timed" ) {
				stroop = <StroopTest timedTest="true" 
											testType={Config.prefs.testType} 
											factor={Config.prefs.factor} 
											testName="Test"
											numberOfIterations={Config.prefs.numberOfIterations}
											pushTestResultHandler={this.pushTestResultHandler}
											testDoneHandler={this.testDoneHandler} />;
			} else {
				stroop = <StroopTest timedTest="false" 
										testType={Config.prefs.testType} 
										factor={Config.prefs.factor}
										testName="Test" 
										numberOfIterations={Config.prefs.numberOfIterations}
										pushTestResultHandler={this.pushTestResultHandler}
										testDoneHandler={this.testDoneHandler} />;
			}
			var videoFile="/media/"+podCastPrefix+"video.mp4";
			return (
				<div className="testContainer">
					<div className="testVideo"><VideoPlayer width="640" height="480" autoplay="autoplay" videoUrl={videoFile} videoEnd={this.videoEnd} /></div>
					<div className="testStroop">{stroop}</div>
				</div>
			);
		}
	});
});