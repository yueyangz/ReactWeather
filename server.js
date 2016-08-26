var express = require('express');

//create our app

var app = express();

const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
	if (req.headers['x-forwarded-proto'] === 'http') {
		next();
	} else {
		res.direct('http://' + req.hostname + req.url);
	}
});

app.use(express.static('public'));

app.listen(port, function(){
	console.log("Express server is up on port" + port);
});