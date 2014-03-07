var util = require('lib/util');
//var fb = require('facebook');
var Social = require('dk.napp.social');

function ToolbarWindow(){	
	var flexSpace = Ti.UI.createButton({
		systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});
	
	var camera = Ti.UI.createButton({
		systemButton: Ti.UI.iPhone.SystemButton.CAMERA
	});
	
	var send = Ti.UI.createButton({
		systemButton: Ti.UI.iPhone.SystemButton.DONE
	});
	
	var cancel = Ti.UI.createButton({
		systemButton: Ti.UI.iPhone.SystemButton.CANCEL
	});
	
	var share = Ti.UI.createButton({
		title: 'Condividi'
	});
	
	var toolbar = Ti.UI.iOS.createToolbar({
		items : [send, flexSpace, camera, flexSpace, share],
		button: 0,
		borderTop: true,
		borderBottom: false,
		zIndex: 10,
		bottom: 0,
	});
	
	
	share.addEventListener('click',function(){
		Ti.API.info("module is => " + Social);
    	Ti.API.info("Facebook available: " + Social.isFacebookSupported());
    	Ti.API.info("Twitter available: " + Social.isTwitterSupported());
	});

	return toolbar;
};

module.exports = ToolbarWindow;