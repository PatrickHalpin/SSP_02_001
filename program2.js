var fs = require("fs");
var i =0; 
var allFiles;
//getting the contents of the file
fs.readdir("./", function (err, files)
{
	readAFile(files[i]);
	allFiles=files;
});
	
var readAFile = function (fileName)
{ 
	fs.readFile(fileName, function (err, data)
	{
		if(allFiles[i]!=='program.js' && allFiles[i]!=='program2.js')
		{
			console.log("contents of " + allFiles[i] +  " "+ data);
			i++;
			if(i<allFiles.length)
			{
				readAFile(allFiles[i]);
			}
		}



	});
};
