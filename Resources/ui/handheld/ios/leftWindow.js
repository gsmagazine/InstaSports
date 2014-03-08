function leftWindow(){
	var self = Ti.UI.createWindow({
		top: 0,
		left: 0,
		width: 200
	});
	
	var menuTitles = [
		{title: 'Menu 1'},
		{title: 'Menu 2'},
		{title: 'Menu 3'},
		{title: 'Menu 4'},
		{title: 'Menu 5'}
	];
	
	var tbViewMenu = Ti.UI.createTableView({
		data: menuTitles
	});
	
	self.add(tbViewMenu);
	
	return self;
};

module.exports = leftWindow;
