function Event(result){
	var json = result;
	Ti.API.debug(json);
	Ti.API.info(json.sports[0].leagues[0].teams[0].location);
	this.location = json.sports[0].leagues[0].teams[0].location;
	this.hometeam = json.sports[0].leagues[0].teams[0].nickname;
};

Event.prototype.Location = function (){
	return this.location;
};

Event.prototype.Result = function (){
	return this.result;
};

Event.prototype.HomeTeam = function (){
	return this.hometeam;
};

Event.prototype.AwayTeam = function (){
	return this.awayteam;
};

module.exports = Event;