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



/********************
  * START MONGOOSE
 ********************/
mongoose.Promise = Promise;
mongoose.connect(
  keys.mongoURI, {
    useNewUrlParser: true
  }
);
mongoose.set('debug', true);


/*********************
 PRODUCTION ENVIRONMENT
*********************/
if (process.env.NODE_ENV === 'production') {
  //Serve any static files from the React App
  app.use(express.static(path.join(__dirname, 'client/build')));

  //Handle React Routing, return all requests to React App
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
