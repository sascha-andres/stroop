"use strict";

define(["react"], function (React) {
	return React.createClass({
	
	  videoEnded: function() {
	  	this.props.videoEnd();
		},
		
		componentDidMount: function(){
			var video = this.getDOMNode();
	
			self = this
	
			// Sent when playback completes
			video.addEventListener('ended', function(e){
				self.videoEnded();
			}, false);
		},
		
		render: function() {
			if ( this.props.autoplay === "autoplay" ) {
				return (
					<video width={this.props.width} height={this.props.height} autoPlay onEnded={this.videoEnded}>
						<source src={this.props.videoUrl} type="video/mp4"/>
					</video>
				);
			} else {
				return (
					<video width={this.props.width} height={this.props.height} controls="controls" onEnded={this.videoEnded}>
						<source src={this.props.videoUrl} type="video/mp4"/>
					</video>
				);
			}
		}
	});
});