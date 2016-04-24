'use strict';

var path = process.cwd();

var dateParser = require(path + "/app/controllers/dateParser.js");

module.exports = function (app) {
	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});
	app.route('/:date')
		.get(function(req, res) {
		    res.json(dateParser(req.params.date))
		})
};
