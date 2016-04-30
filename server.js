var fs = require('fs');
var getUserData = require("./node_modules/getUserData/getUserData");


// Entry Linkedin URL here:
var profileLink = 'https://www.linkedin.com/in/sunjieming'

var linksArray = [];


getUserData.getMyStuff(profileLink, function (res) {
	//console.log(res);
	linksArray = res.linksArray;
	console.log(linksArray);
	//console.log(res.linksArray);
	var url = '';

	// Cut off leading "http://" and "https://"
	if (res.companyURL.slice(0,7) === "http://"){
		url = res.companyURL.slice(7,res.companyURL.length);
	} else if (res.companyURL.slice(0,8) === "https://"){
		url = res.companyURL.slice(8,res.companyURL.length);
	}

	// Cut off trailing "/"
	if (url[url.length-1] === "/") {
		url = url.slice(0,url.length-1);
	}

	// Concatenate data in single line CSV Format
	var stringToWrite = res.firstName + ',' + res.lastName + ',' + url + "\n";

	// Write to designated file
	fs.appendFile('leads.csv', stringToWrite, function(err) {
		if (err) return console.log(err);
		console.log("response.data > leads.csv");
	});
});













