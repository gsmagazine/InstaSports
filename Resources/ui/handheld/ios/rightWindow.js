function rightWindow(){
	var self = Ti.UI.createWindow({
		title: '',
		top: 0,
		right: 0,
		width: 200
	});
	
	var menuSkin = [
		{title: 'Soccer', font:{fontSize: 12, fontFamily: 'Arial'}, color: 'white'},
		{title: 'Hockey', font:{fontSize: 12, fontFamily: 'Arial'}, color: 'white'},
		{title: 'Football', font:{fontSize: 12, fontFamily: 'Arial'}, color: 'white'}
	];
	
	var tableView = Ti.UI.createTableView({
		headerTitle: 'ALTRE SKIN',
		backgroundColor: '#ffffff',
		scrollable: false,
		showVerticalScrollIndicator: false,
		separatorColor: '#222222',
		data: menuSkin
		
	});
	
	self.add(tableView);
	
	return self;
};

module.exports = rightWindow;