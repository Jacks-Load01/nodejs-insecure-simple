var http = require('http');
http.createServer(function (request, response) {
	if (request.method === 'POST') {
		var data = '';
		request.addListener('data', function(chunk) {
			console.log("Got some data! => " + chunk);
			data += chunk;
		});
		request.addListener('end', function() {
			console.log("...and end.")
			try {
				eval("(" + data + ")");
			}
			catch (exception) {}
		});
	}
}).listen(process.env.PORT || 3000);
console.log('The server is on...'); 