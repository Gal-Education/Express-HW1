const	express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		func = require('./function');

app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', express.static('api'));


app.get("/getAllComingSoon/",
	(req, res) => {
		func.getAllData().then(
		(data) => {
	        if(data.length === 0)
	        	res.send(func.error())
	        else
	        	res.json(data);
		}, (error) => {
		    console.log(error);
	    });
});

app.post("/getMovieDataById/",
	(req, res) => {
		var id = req.body.movieId;
		func.getMovieById(id).then(
		(data) => {
	        if(data.length === 0)
	        	res.send(func.error())
	        else
	        	res.json(data);
		}, (error) => {
		    console.log(error);
	    });
});

app.get("/getMovieDataFilter/:year/:category",
	(req, res) => {
		var year = req.params.year,
			cat = req.params.category;

		func.getMovieDataFilter(year,cat).then(
		(data) => {
	        if(data.length === 0)
	        	res.send(func.error())
	        else
	        	res.json(data);
		}, (error) => {
		    console.log(error);
	    });
		
});

app.all('*',
	(req, res) => {
		res.send(func.error());
});

app.listen(app.get('port'),
	() => {
		console.log(`listening to port ${app.get('port')}`);
});