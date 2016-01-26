var fs = require("fs");

//getting the contents of the file
fs.readdir("./", function (err, files)
{
	console.log("Got contents of the directory");
	//searching through conetents and getting the names of each file to be read out
	for(var x in files)
	 {	
	 	//testing if the file name is the same as the program name
	 	if(files[x]!='program.js')
	 	{
			console.log(files[x]);
			//read the file and print out the conents 
			fs.readFile(x, function (err, data)
			{
				console.log(data);		
			});
		}

		
		
	}
});