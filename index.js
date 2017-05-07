const	express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		func = require('./function.js');

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/getAllComingSoon/",
	(req, res) => {
		res.json(func.getAllData());
});

app.post("/getMovieDataById/",
	(req, res) => {
		var id = req.body.movieId;
		var result = func.getMovieById(id);
		if(result == false) {
			console.log(`Movie id number: ${id} has not found.`);
			res.status(200).json({"Error" : "Movie id " + id + " has not found."});
		}
		console.log(`Movie id number: ${id} has found.`);
		res.status(200).json(result);
});

app.get("/getMovieDataFilter/:year/:category",
	(req, res) => {
		var year = req.params.year,
			cat = req.params.category;

		var result = func.getMovieDataFilter(year,cat);
		if(result == false) {
			res.status(200).json({"Error" : "No Result"});
		}
		else {
			res.status(200).send(result);
		}
		
});

app.all('*',
	(req, res) => {
		res.send(func.error());
});

app.listen(app.get('port'),
	() => {
		console.log(`listening to port ${app.get('port')}`);
});