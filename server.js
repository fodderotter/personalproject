var   express = require('express')
	, app = express()
	, bodyParser = require('body-parser')
	, cors = require('cors')
	, mongoose = require('mongoose')
	, port = process.env.PORT || 9000
	// , mongoUri = "mongodb://heroku_mn11f7hq:abcd1234@ds021010.mlab.com:21010/heroku_mn11f7hq"
	, mongoUri = 'mongodb://localhost:27017/projects'
    , morgan = require('morgan');


app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'))
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('Connected to MongoDB at ' + mongoUri);
});

require("./routes/routes.js")(app);

app.listen(port, function() {
	console.log('Listening on ' + port);
});