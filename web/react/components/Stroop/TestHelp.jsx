"use strict";

define(["react"], function (React) {
	return React.createClass({
	
		clickRed: function() {
			this.props.colorClick("r");
		},
		
		clickBlue: function() {
			this.props.colorClick("b");
		},
		
		clickYellow: function() {
			this.props.colorClick("y");
		},
		
		clickGreen: function() {
			this.props.colorClick("g");
		},
		
		render: function() {
		    if ( ! this.props.isBlack ) {
				return (
					<div className="helpBox">
						<div className="helpSubBoxRed" onClick={this.clickRed} />
						<div className="helpSubBoxBlue" onClick={this.clickBlue} />
						<div className="helpSubBoxYellow" onClick={this.clickYellow} />
						<div className="helpSubBoxGreen" onClick={this.clickGreen} />
					</div>
				);
			} else {
				return (
					<div className="helpBoxMargin">
						<div className="helpSubBoxRed" onClick={this.clickRed} />
						<div className="helpSubBoxBlue" onClick={this.clickBlue} />
						<div className="helpSubBoxYellow" onClick={this.clickYellow} />
						<div className="helpSubBoxGreen" onClick={this.clickGreen} />
					</div>
				);
			}
		}
	});
});