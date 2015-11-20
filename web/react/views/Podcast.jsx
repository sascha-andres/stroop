"use strict";

define(["react", "mixins/Navigation", "components/videoplayer"], function (React, Navigation, VideoPlayer) {
	return React.createClass({
		mixins: [Navigation],
		
		render: function() {
				return (
					<div className="centeredText">
						Sie können nun mit dem Test beginnen<br/><br/>
						<button className="btn btn-default" onClick={this.moveNext}>Weiter</button>
					</div>
				);
		}
	});
});