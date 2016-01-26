var fs = require("fs");
//conts the iterations of reading files, used for displaying final message
var i =0; 

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
	 		//print file name
			console.log(files[x]);
			//read the file and print out the contents 
			fs.readFile(files[x], function (err, data)
			{
				console.log("contents of " + files[x] + ' ' + data);
				i++;

				//display message when count is finished
				if(i == files.length -1)
				{
					console.log('all done');	
				}
				
			});
		}

						
		
	}
});

