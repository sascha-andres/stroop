"use strict";

define(["react", "mixins/Navigation", "components/videoplayer"], function (React, Navigation, VideoPlayer) {
	return React.createClass({
		mixins: [Navigation],
		
		render: function() {
		  console.log(podCastPrefix);
			var audioFile = "/media/"+podCastPrefix+"test.mp3";
			return (
				<div className="centeredText">
					Sie hören jetzt einen Begrüßungssatz, bitte stöpseln Sie die Kopfhörer an und regulieren Sie die Lautstärke<br />
					<br /><br />
					<audio autoPlay loop>
						<source src={audioFile} type="audio/mpeg" />
						Your browser does not support the audio tag.
					</audio>
					<br /><br />
					Danach drücken Sie bitte auf die Schaltfläche 'Weiter'
					<br /><br />
					<button className="btn btn-default" onClick={this.moveNext}>Weiter</button><br /><br />
				</div>
			);
		}
	});
});