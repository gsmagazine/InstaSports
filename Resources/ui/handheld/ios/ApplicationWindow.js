var util = require('lib/util');
var nappSlideMenu = require('dk.napp.slidemenu');

function ApplicationWindow(){
	var leftWindow = require('ui/handheld/ios/leftWindow');
	var winLeft = new leftWindow();
	
	var rightWindow = require('ui/handheld/ios/rightWindow');
	var winRight = new rightWindow();
	
	var self = Ti.UI.createWindow({
		backgroundColor: 'white',
		title: 'InstaSports',
		tintColor: '#000000',
		translucent: false,
		barColor: '#336699'
	});
	
	var leftBtn = Ti.UI.createButton({
		title: 'Menu',
	});
	
	leftBtn.addEventListener('click', function(){
		mainWindow.toggleLeftView();
		mainWindow.setCenterhiddenInteractivity('TouchEnabled');
	});
	
	var rightBtn = Ti.UI.createButton({
		title: 'Help'
	});
	
	rightBtn.addEventListener('click', function(){
		mainWindow.toggleRightView();
		mainWindow.setCenterhiddenInteractivity('TouchEnabled');
	});
	
	self.leftNavButton = leftBtn;
	self.rightNavButton = rightBtn;
	
	/* **** Codice Pagina ******** */
	
	/*Titanium.Media.ShowCamera({
		success: function(event){
			var cropRect = event.cropRect;
			var image = event.media;
			Ti.API.debug('Our type was: ' + event.mediaType);
			if (evet.mediaType == Ti.Media.MEDIA_TYPE_PHOTO){
				var imageView = Ti.UI.createImageView({
					width: self.width,
					height: self.height,
					image: event.media
				});
				self.add(imageView);
			}
			else{
				alert("got the wrong type back ="+event.mediaType);
			}
		},
		cancel:function(){},
		error:function(error){
			var a = Ti.UI.createAlertDialog({title: 'Camera'});
			if (error.code == Titanium.Media.NO_CAMERA){
				a.setMessage('Please run this test on device');
			}
			else {
				a.setMessage('Unexpected error: ' + error.code);
			}
			a.show();
		},
		saveToPhotoGallery: true,
		allowEditing: true,
		mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
	});*/
	
	//var vwTitle = require('ui/handheld/ios/TitleWindow');
	//var title = new vwTitle();
	
	var imgView = Ti.UI.createImageView({
        width: Titanium.Platform.displayCaps.platformWidth,
        height:Titanium.Platform.displayCaps.platformHeight - 44,
        left:0.0,
        top: 0.0, //util.theTop,
        visible:true,
        zIndex: 1,
        image: '/images/RomaCastelSantAngelo.jpg'
	});
	
	var opacityWindow = require('ui/handheld/ios/OpacityWindow');
	var bgOpacity = new opacityWindow();
		
	var view1 = Ti.UI.createImageView({
		image: '/images/soccer/soccer1.png',
		visible: true,
		height: 150,
		bottom: 0,
		left: -90
	});
	var view2 = Ti.UI.createImageView({
		image: '/images/soccer/soccer2.png',
		visible: true,
		bottom: 0,
		height: 180,
		left:-215
	});
	var view3 = Ti.UI.createImageView({
		image: '/images/soccer/soccer3.png',
		visible: true,
		bottom: 0,
		left:-180,
		height: 150
	});
	
	var scroll = require('/ui/handheld/ios/ScrollableWindow');
	var vwOverlay = new scroll();
	vwOverlay.views = [view1,view2,view3];
	
	var lblHomeTeam = Ti.UI.createLabel({
		bottom: 50,
		right: 10,
		height: Ti.UI.SIZE,
		font:{fontSize: 12, fontFamily: 'Verdana', fontWeight: 'bold' },
		width: Ti.UI.SIZE,
		color: '#ffffff',
		textAlign:'left'
	});

	var lblScore = Ti.UI.createLabel({
		bottom: 10,
		right: 59,
		height: Ti.UI.SIZE,
		width: Ti.UI.SIZE,
		font: {fontSize: 30, fontFamily: 'Verdana', fontWeight: 'bold'},
		color: 'white',
		textAlign: 'center'
	});
	
	var lblStadio = Ti.UI.createLabel({
		bottom: 0,
		left: 190,
		textAlign: 'left',
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		font: {fontSize: 8, fontFamily: 'Verdana', fontWeigth: 'bold'},
		color: 'white'
	});
		
	var toolbarWindow = require('/ui/handheld/ios/ToolbarWindow');
	var toolbar = new toolbarWindow();
	
	view1.add(lblHomeTeam);
	view1.add(lblScore);
	view1.add(lblStadio);
	//self.add(title);
	self.add(imgView);
	self.add(bgOpacity);
	self.add(vwOverlay);
	//self.add(toolbar);
	
	//var sUrl = "http://api.espn.com/v1/sports/basketball/nba/teams/2?apikey=:z6n9pwddn94msbhjn74ejjqk";
	
	self.addEventListener('open',function (){
		lblHomeTeam.text = "AS Roma" + " - " + "Juventus FC"; //resultevent.HomeTeam();
		lblScore.text = "1" + " - " + "0";
		lblStadio.text = "Roma - Stadio Olimpico";
	});
	
	/* **** Codice Pagine ******** */
		
	var navController = Ti.UI.iOS.createNavigationWindow({
		window: self
	});
		
	var mainWindow = nappSlideMenu.createSlideMenuWindow({
		centerWindow: navController,
		leftWindow: winLeft,
		rightWindow: winRight, 
		statusBarStyle: nappSlideMenu.STATUSBAR_BLACK,
		leftLedge: 120,
		rightLedge: 120
	});

	mainWindow.add(toolbar);
	
	mainWindow.addEventListener('viewWillOpen', function(e){
		Ti.API.info(e);
	});
	
	mainWindow.addEventListener('viewWillClose', function(e){
		Ti.API.info(e);
	});
	
	mainWindow.addEventListener('viewDidOpen',function(e){
		Ti.API.info(e);
	});
	
	mainWindow.addEventListener('didChangeOffset',function(e){
		Ti.API.info(e);
	});
	
	mainWindow.addEventListener('centerViewDidShow',function(e){
		Ti.API.info(e);
	});
	
	if (Ti.Geolocation.locationServicesEnabled) {
	    Ti.Geolocation.purpose = 'Get Current Location';
	    Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
	    Ti.Geolocation.distanceFilter = 10;
	    Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
	
	    Ti.Geolocation.addEventListener('location', function(e) {
	        if (e.error) {
	            alert('Error: ' + e.error);
	        } else {
	            Ti.API.info(e.coords);
	        }
	    });
	} else {
	    alert('Please enable location services');
	}
			
	return mainWindow;
};

module.exports = ApplicationWindow;