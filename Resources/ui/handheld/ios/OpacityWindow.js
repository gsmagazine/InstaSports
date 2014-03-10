var util = require('/lib/util');

function OpacityWindow(){
	var bgOpacity = Ti.UI.createImageView({
		image: '/images/overlayBG.png',
		zIndex: 2,
		visible: true,
		left: 0.0,
		opacity: 0.3,
		bottom: 44,
		height: 100,
		width: Ti.UI.FILL
	});
	return bgOpacity;
};

module.exports = OpacityWindow;
