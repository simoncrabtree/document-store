var http = require('http');
var url = require('url');
var azure = require('azure-storage');
var blobSvc = azure.createBlobService();

http.createServer(function (req, res) {
	var query = url.parse(req.url, true).query;

	if (typeof query.file === 'undefined') {
		res.end("Must specify querystring (e.g ?file=myfile.txt)");
	} else {
		res.setHeader('Content-disposition', 'attachment; filename='+query.file);
		blobSvc.createReadStream('testcontainer', query.file).pipe(res);
	}
}).listen(3333);

console.log("Server running at http://localhost:3333/");

