"use strict";

define(["models/config"], function (Config) {
	return {
	
		getCurrentView: function() {
			var i = 0;
			for( i = 0; i < Config.views.length; i++ ) {
				if ( Config.views[i].name === Config.state.view ) {
					return Config.views[i];
				}
			}
		},
		
		moveNext: function() {
			if ( null == this.props.moveNext ) {
				return;
			}
			
			var currentView = this.getCurrentView();
			if ( null == currentView.next ) {
				return;
			}
			this.props.moveNext(currentView.next);
		},
		
		movePrevious: function() {
			if ( null == this.props.movePrevious ) {
				return;
			}
			
			var currentView = this.getCurrentView();
			if ( null == currentView.previous ) {
				return;
			}
			this.props.movePrevious(currentView.previous);
		}
	};
});