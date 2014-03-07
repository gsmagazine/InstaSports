var util = require('lib/util');

function TitleWindow(){
	var vwTitle = Ti.UI.createView({
		id: 'vwTitle',
		top: util.theTop,
		height: 28,
		zIndex: 10,
		backgroundColor: '#336699'
	});
	
	var lblTitle = Ti.UI.createLabel({
	   color: '#ffffff',
	   font: { fontSize:20, fontWeight: 'bold', fontFamily: 'Verdana' },
	   text: 'InstaSports',
	   textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	   width: Ti.UI.SIZE, 
	   height: Ti.UI.SIZE
	});
	
	var btnLeft = Ti.UI.createButton({
		backgroundImage: 'images/mobile-icon-menu.png',
		title: '',
		left: 0,
		top: 3,
		width: 'auto',
		height: 'auto'
	});
	
	var btnRight = Ti.UI.createButton({
		backgroundImage: 'images/help.png',
		right: 0,
		top: 0,
		width: 'auto',
		height: 'auto'
	});
		
	vwTitle.add(btnLeft);
	vwTitle.add(lblTitle);
	vwTitle.add(btnRight);
	
	return vwTitle;
};

module.exports = TitleWindow;
