"use strict";

define(["react", "mixins/Navigation", "models/config"], function (React, Navigation, Config) {
	return React.createClass({
		mixins: [Navigation],
		
		getInitialState: function() {
			return {
				questionaireVisible: false
			}
		},
		
		showQuestionaire: function() {
			var w;
			if ( Config.state.testIndex === "T_2" ) {
				w = window.open("http://ww2.unipark.de/uc/stroop/", "_blank", 'width=500,height=500');
			} else {
				w = window.open("http://ww2.unipark.de/uc/Biwis/dde8/", "_blank", 'width=500,height=500');
			}
			this.setState({
				questionaireVisible: true
			});
		},
		
		render: function() {
		 var questionaire;
		 var navigationalElements;
		 
		 if ( this.state.questionaireVisible ) {
				navigationalElements = <button className="btn btn-default" onClick={this.moveNext}>Weiter</button>; 
		 } else {
				questionaire = <div className="centered"><br/ ><br/ ><button className="btn btn-default" onClick={this.showQuestionaire}>Zum Fragebogen</button><br/ ><br/ ></div>;
				navigationalElements = <div/>
		 }
			
			return (
				<div className="centeredText">
					<p>Vielen Dank, dass Sie sich dafür bereit erklärt haben, an dieser Testung teilzunehmen. Sie erweisen mir damit einen großen Dienst und sind eine unglaubliche Hilfe für das Gelingen meiner Bachelorarbeit. Ihre Daten werden anonym erfasst, vertraulich behandelt und nicht an Dritte weitergegeben. Falls Sie Interesse an den Forschungsergebnissen haben, lasse ich Ihnen dieser gerne per Mail zukommen.  Die Studie an der Sie teilnehmen handelt vom Lernen mit Enhanced Podcasts. Enhanced Podcasts sind multimediale Lernangebote, die sich durch eine gleichzeitige Präsentation bildlicher (in unserem Fall ein Video) und sprachlicher Informationen auszeichnen.</p>
					{questionaire}
					<p>Bitte lassen schliessen Sie keines der Fenster. Sie können wahlweise den Fragebogen oder dieses Fenster minimieren. Sie werden im Laufe der Erhebung zwischen den Fenstern wechseln​.</p>
					{navigationalElements}
				</div>
			);
		}
	});
});