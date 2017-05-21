var mongoose = require('mongoose'),
	schema = mongoose.Schema;

	mongoose.Promise = global.Promise;

	info = new schema({
		summary: String,
		rate: String,
		lenght: String,
		}, {collection: 'comingsoon'});

module.exports = info;