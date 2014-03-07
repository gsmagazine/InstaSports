function isiOS7Plus(){
	if (Ti.Platform.name == 'iPhone OS')
	{
		var version = Ti.Platform.version.split(".");
		var major = parseInt(version[0],10);
		
		if(major >= 7){
			return true;
		}
	}
	return false;
};

var iOS7 = isiOS7Plus();
exports.theTop = iOS7 ? 20 : 0;
