var azure = require('azure-storage')
var blobSvc = azure.createBlobService();
var blobName = process.argv[2];

blobSvc.getBlobToText('testcontainer', blobName, function(err, blobContent, blob){
	if(err){
		console.error("Couldn't download blob %s", blobName);
		console.error(err);
	}else{
		console.log(blobContent);
	}
});
