const 	Data = require('./schema'),
		mongoose = require('mongoose'),
		consts = require('./consts');

// Conntection
mongoose.Promise = global.Promise;
mongoose.connect(consts.MLAB_KEY);
const conn = mongoose.connection;//get default connection

conn.on('error',
	(err) => {
		console.log(`connection error: ${err}`);
	}
);

conn.once('open',
	() => {
		console.log("Connected");
	}
);
	
exports.getAllData = () => {
	return new Promise( (resolve, reject ) => {
		Data.find({},
			(err, data) => {
			if(err) reject(`error: ${err}`);
				console.log(`Printing All Data!`);
				resolve(data);
			}
		)
	});
};



exports.getMovieById = (id) => {
	return new Promise( (resolve, reject ) => {
		Data.find({"id": id},
			(err, data) => {
			if(err) reject(`error: ${err}`);
			console.log(`Data id found`);
			resolve(data);
		})
	});
}

exports.getMovieDataFilter = (year,category) => {
	return new Promise( (resolve, reject ) => {
		Data.find({"year": year, "category": category},
			(err, data) => {
			if(err) reject(`error: ${err}`);
			console.log(`Data id found`);
			resolve(data);
		})
	});
}

exports.error = () => {
	return `<html>
					<head>
					<title>200 NOT FOUND</title>
					</head>

					<body bgcolor="linen" text="black">
					<div style="font-size: 400px; text-align: center;">?</div>
					<div style="font-size: 128px; text-align: center; font-variant: small-caps;">Not Found</div>
					<div style="text-align: center;">The document you requested could not be found. Please check the URL and try again. This is a recording.</div>
					</body>
					</html>
					`;
}