var mongoose = require('mongoose'),
	info = require('./infoSchema.js'),
	schema = mongoose.Schema;

	mongoose.Promise = global.Promise;

	dataSchema = new schema({
		id: Number,
		name: String,
		year: String,
		category: [String],
		info: [info],
		Stars: [String],
		}, {collection: 'comingsoon'});

var Data = mongoose.model('Data', dataSchema);
module.exports = Data;