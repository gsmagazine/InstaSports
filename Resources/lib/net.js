/* http://api.espn.com/:version/:resource/:method?apikey=:yourkey

var url = "http://api.espn.com/v1/sports/soccer/ita.1/teams/104?apikey=z6n9pwddn94msbhjn74ejjqk";
var xhr = Ti.Network.createHTTPClient({
	onload: function(){
		json = JSON.stringify(url);	
	}
});
*/
var url = Ti.App.Properties.getString('url');

exports.get = function(_callback){
	var client = Ti.Network.createHTTPClient();
	client.onload = function(e){
		//alert(JSON.parse(client.responseText));
		_callback(JSON.parse(client.responseText));
	};
	
	client.onerror = function(e){
		Ti.API.info(e);
	};
	
	client.open('GET', url);
	client.send();
};

/*function request(url){
	var xhr = Ti.Network.createHTTPClient({
		onload: function(e){
			Ti.API.debug(this.responseText);
			json = JSON.parse(this.response);	
		},
		onerror: function(e){
			Ti.API.debug("ERROR: " + JSON.stringify(e));
			aler('ERROR!!!');
		},
		timeout: 5000
	});
	
	xhr.open("GET", url);
	xhr.send();
	
	return xhr.onload();
};

module.exports = request;*/
