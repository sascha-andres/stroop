"use strict";

define([], function () {
	var prefs = {
		stroopTestType: "timed",
		colors: ["red", "green", "blue", "yellow"],
		colorNames: ["Rot", "Grün", "Blau", "Gelb"],
		demoTestType: "mostlyCorrect",
		demoFactor: 75,
		demoNumberOfIterations: 50000,
		demoTimeout: 1000,
		testType: "mostlyCorrect",
		factor: 75,
		numberOfIterations: 500000,
		stroopTicks: 30,
		stroopBlackTicks: 5
	};
	
	
	var stroopResults = [];
	
	var views = [{
		name: "Introduction",
		previous: null,
		next: "PinCode"
	},{
		name: "Audio",
		previous: null,
		next: "Podcast"
	},{
		name: "Podcast",
		previous: null,
		next: "Test"
	},{
		name: "PinCode",
		previous: null,
		next: "StroopExplanation"
	},{
		name: "StroopExplanation",
		previous: null,
		next: "StroopDemo"
	},{
		name: "StroopDemo",
		previous: null,
		next: "Audio"
	},{
		name: "Test",
		previous: null,
		next: "Questionaire"
	},{
		name: "Questionaire",
		previous: null,
		next: "ThankYou"
	},{
		name: "ThankYou",
		previous: null,
		next: null
	}];
	
	var state = {
		view: "Introduction",
		code: "",
		testIndex: "-1",
		aOrB: ""
	};
	
	var exports = {
		prefs: prefs,
		state: state,
		views: views,
		stroopResults: stroopResults
	};

    return exports;
});