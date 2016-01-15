var azure = require('azure-storage')

var blobSvc = azure.createBlobService();

blobSvc.createContainerIfNotExists('testcontainer', function(err, result, response){
	if(!err){
		blobSvc.createBlockBlobFromText('testcontainer', process.argv[2], process.argv[3], function(err, result, response) { 
			if(err){
				console.log('Couldnt upload string');
				console.error(error);
			}else{
				console.log('Done', result);
			}
		});
	}
});

