var azure = require('azure-storage')

var blobSvc = azure.createBlobService();

blobSvc.listBlobsSegmented('testcontainer', null, function(err, result,response){
	if(!err)
		console.log(result)
})
