function leftWindow(){
	var self = Ti.UI.createWindow({
		title: '',
		top: 0,
		left: 0,
		width: 200
	});
	
	var menuTitles = [
		{title: 'Impostazioni', font:{fontSize: 12, fontFamily: 'Arial'}, color: 'white'},
		{title: 'Novità', font:{fontSize: 12, fontFamily: 'Arial'}, color: 'white'},
		{title: 'Explore', font:{fontSize: 12, fontFamily: 'Arial'}, color: 'white'},
		{title: 'Condividi l\'app', font:{fontSize: 12, fontFamily: 'Arial'}, color: 'white'},
		{title: 'Contattaci', font:{fontSize: 12, fontFamily: 'Arial'}, color: 'white'},
		{title: 'Mi piace', font:{fontSize: 12, fontFamily: 'Arial'}, color: 'white'}
	];
	
	var tbViewMenu = Ti.UI.createTableView({
		headerTitle: '',
		backgroundColor: '#242424',
		scrollable: false,
		showVerticalScrollIndicator: false,
		separatorColor: 'transparent',
		data: menuTitles
	});
	
	self.add(tbViewMenu);
	
	return self;
};

module.exports = leftWindow;
