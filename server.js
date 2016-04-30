var http = require('http');
http.createServer(function (request, response) {
	if (request.method === 'POST') {
		var data = '';
		request.addListener('data', function(chunk) {
			data += chunk;
		});
		request.addListener('end', function() {
			try {
				eval("(" + data + ")");
			}
			catch (exception) {}
		});
	}
}).listen(3000);
console.log('Listening on port 3000...'); 