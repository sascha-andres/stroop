"use strict";

define(["models/config"], function (Config) {
	return {
		timeStart: null,
		
		getInitialState: function() {
			return {
				currentTest: -1,
				currentColor: "green",
				currentDisplayColor: "green",
				isBlack: false,
				ticks: 0
			}
		},
		
		componentWillMount: function() {
			this.calculateState();
		},
		
		rHandler: function() {
			this.keyHandler("A");
		},
		
		gHandler: function() {
			this.keyHandler("S");
		},
		
		bHandler: function() {
			this.keyHandler("Y");
		},
		
		yHandler: function() {
			this.keyHandler("X");
		},
		
		componentDidMount: function() {
			//key('a', this.rHandler);
			//key('s', this.gHandler);
			//key('y', this.bHandler);
			//key('x', this.yHandler);
		},
		
		componentWillUnmount: function() {
			//console.log("-- StroopHandling componentWillUnmount --");
			// this does not work ( at least not in chrome, remember to handle that )
			//key.unbind('a', this.rHandler);
			//key.unbind('s', this.gHandler);
			//key.unbind('y', this.bHandler);
			//key.unbind('x', this.yHandler);
		},
		
		keyHandler: function(colorPressed) {
		  if ( this.isMounted ) {
				var colorName = this.state.currentDisplayColor.toUpperCase();
				var d = new Date();
				var testResult = {
					title: this.props.testName,
					testType: this.props.testType,
					factor: this.props.factor,
					pressed: colorPressed,
					correct: colorName,
					timedTest: this.props.timedTest,
					time: d.getTime() - this.timeStart
				}
				this.props.pushTestResultHandler(testResult);
				if ( Config.prefs.stroopTestType === "timed" ) {
					this.setState( { isBlack: true, ticks: 0 } );
				} else {
					if ( this.state.currentTest + 1 == this.props.numberOfIterations ) {
						this.props.testDoneHandler();
					} else { 
						this.calculateState();
					}
				}
			}
		},
		
		calculateState: function() {
			var d = new Date();
			this.timeStart = d.getTime();
			var colorIndex = Math.floor((Math.random() * Config.prefs.colors.length));
			var displayColorIndex = colorIndex;
			var chance = Math.floor((Math.random() * 100) + 1);
			if ( chance <= this.props.factor ) {
				while ( displayColorIndex == colorIndex ) { 
					displayColorIndex = Math.floor((Math.random() * Config.prefs.colors.length));
				}
			}
			var st = this.state;
			st.currentTest = st.currentTest + 1;
			st.currentColor = Config.prefs.colors[colorIndex];
			st.currentDisplayColor = Config.prefs.colorNames[displayColorIndex];
			st.ticks = 0;
			st.isBlack = false;
			this.setState(st);
		}
	};
});