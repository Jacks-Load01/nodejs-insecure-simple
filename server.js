var http = require('http');
function f1(request, response) {
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
http.createServer(f1);
console.log('The server is on...'); 
