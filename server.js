var http = require('http')
var qs = require('querystring');
var server = http.createServer(function(req,res){
	var body='';
	req.on('data',function(data){
		console.log('DATA AAYA');
		body += data;
	});
	req.on('end', function(){
		var parsedData = qs.parse(body);
		var numDigits = parsedData.numDigits;
		var numRandom = parsedData.numRandom;
		var generatedRandom = [];
		var temp;
		var max;
		var min;
		console.log(parsedData);
		if(!numDigits || !numRandom){
			res.writeHead(400);
			res.end('Input parameters missing');
		}
		if(numDigits == 0){
			res.writeHead(400);
			res.end('Number of digits should be > 0')	
		}
		max = Math.pow(10, numDigits) - 1;
		min = Math.pow(10, numDigits - 1);
		while(numRandom > 0){
			temp = Math.floor(Math.random() * (max-min+1)) + min;
			if(!(temp in generatedRandom)){
				generatedRandom.push(temp);
				numRandom--;	
			}
		}

		res.end(JSON.stringify(generatedRandom));
	});
});
server.listen(8000);
