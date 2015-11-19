"use strict";

define(["react"], function (React) {
	return React.createClass({
		render: function() {
			var className = "colorText " + this.props.colorClass;
			return (
				<div className={className}>{this.props.colorName}</div>
			);
		}
	});
});