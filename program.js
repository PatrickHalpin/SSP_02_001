var fs = require("fs");

fs.readdir("./", function (err, files)
{
	console.log("Got contents of the directory");
	for(var x in files)
	 {
		console.log(files[x]);
		
		
	}
});