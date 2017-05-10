const data = require('./data/comingSoonMovies.json');

exports.getAllData = () => {
	return data;
}

exports.getMovieById = (id) => {
	let isFound = false;
	for(let i in data.movies) {
		var movieId = data.movies[i];
		if(movieId.id == id) {
			console.log(`Movie id number: ${i} has found successfuly.`);
			isFound = true;
			return movieId;
		}
	}
	return false;
}

exports.getMovieDataFilter = (year,category) => {
	var query = `[`,
		count = 0;

	let isYear = false,
		isCat = false;

	for(let i in data.movies) {
		var _year = data.movies[i];
	
		if(_year.year == year) {
			isYear = true;
			for(let j in _year.category) {
				var _cat = _year.category[j];
				if(_cat == category) {
					isCat = true;
				}
			}
		}
		if(isYear && isCat) {
			console.log(`Movie id number: ${data.movies[i].name} has found.`);
			query += JSON.stringify(data.movies[i]) + ",";
			count++;
		}
		isYear = false;
		isCat = false;
	}
	if(count == 0) {
		console.log(`No Results for filter.`);
		return false;
	}
	else {
		console.log("Total results:" + count);
		query = query.substr(0,query.length-1);
		query += `]`;
		query = JSON.parse(query);
		return query;
	}
}

exports.error = () => {
	return `<html>
					<head>
					<title>200 NOT FOUND</title>
					</head>

					<body bgcolor="linen" text="black">
					<div style="font-size: 400px; text-align: center;">? 200 ?</div>
					<div style="font-size: 128px; text-align: center; font-variant: small-caps;">Not Found</div>
					<div style="text-align: center;">The document you requested could not be found. Please check the URL and try again. This is a recording.</div>
					</body>
					</html>
					`;
}
