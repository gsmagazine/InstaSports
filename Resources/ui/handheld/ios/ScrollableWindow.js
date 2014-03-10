var util = require('lib/util');

function ScrollableWindow(){
	var self = Ti.UI.createScrollableView({
		zIndex: 3,
		top: 0, //util.theTop,
		width: Titanium.Platform.displayCaps.platformWidth,
		height: Titanium.Platform.displayCaps.platformHeight - 106,
 		showPagingControl:true,
	});
	
	return self;
};

module.exports = ScrollableWindow;