// For any third party dependencies, like jQuery, place them in the lib folder.

// For the time now
Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'scripts',
    paths: {
			react: '/bower_components/react/react-with-addons'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
// requirejs(['app/main']);