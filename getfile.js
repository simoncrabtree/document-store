var azure = require('azure-storage')
var blobSvc = azure.createBlobService();
var blobName = process.argv[2];
var fileName = process.argv[3];

blobSvc.getBlobToLocalFile('testcontainer', blobName, fileName, function(err, blob){
	if(err){
		console.error("Couldn't download blob %s", blobName);
		console.error(err);
	}else{
		console.log("Done!");
	}
});
