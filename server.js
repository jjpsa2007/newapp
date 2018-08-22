const express = require('express');
//body-parser extract the entire body portion of an incoming request stream and exposes it on  req.body.
const bodyParser = require('body-parser');
//get the mongoose database
const dbConfig = require('./config/db.config.js');
const mongoose = require('mongoose');

//Creates Express app
const app = express();
const port = 3000;
mongoose.Promise = global.Promise;

//parse request from content type application/encoded url
app.use(bodyParser.urlencoded({extended : true}));
//parse request of type application/json
app.use(bodyParser.json());

mongoose.connect(dbConfig.url, {useNewUrlParser: true})
.then(() => {console.log("Successfully connected to DB")})
.catch(err => {
    console.log("Oops some error happened" + err);
    process.exit();
});



app.get('/', (req, res) => {
    res.json({"Message" : "Welcome to the New app created"});
});

app.listen(port, () => {
    console.log("port started on " + port)
});

