Ti.App.Properties.setString('url', "http://api.espn.com/v1/sports/soccer/ita.1/teams/104?apikey=z6n9pwddn94msbhjn74ejjqk");

if (Ti.version < 2.0){
	alert('Sorry - this application template requires Titanium Mobile SDK 2.0 or later');
}

(function(){
	var osname = Ti.Platform.osname,
	    version = Ti.Platform.version,
	    height = Ti.Platform.displayCaps.platformHeight,
	    width = Ti.Platform.displayCaps.platformWidth;
	
	var Window;
	
	if (osname === 'iphone' || osname === 'ipad'){
		Window = require('ui/handheld/ios/ApplicationWindow');
	}
	else if (osname === 'mobileweb'){
		Window = require('ui/mobileweb/ApplicationWindow');
	}
	else {
		Window = require('ui/handheld/android/ApplicationWindow');
	}
	
	var mainWin = new Window();
	mainWin.open();
})();
