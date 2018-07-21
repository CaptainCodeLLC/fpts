const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const user = require('./routes/api/user');

//Init the application with express
const app = express();

// Body parser middleware
app.use(bodyParser.json());

//MongoDB URI
const db = require('./config/keys').mongoURI;

//Connect to mongo
mongoose.connect(db, { useNewUrlParser: true })
.then(()=> console.log("mongodb connected"))
.catch(err => console.log(err));

//use routes
app.use('/api/user', user);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));  
