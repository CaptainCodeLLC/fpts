//Config Vars - mLab
require('dotenv').config();
const keys = require('./config/keys');

//Express Server
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');


//Init the application with express
const app = express();
const port = process.env.PORT || process.env.DEV_PORT;
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


//user routes
require('./models/User');
require('./routes/api/user')(app);


app.listen(port, (err) => {
  if (err) return console.log(`ERROR on port ${port}`); 
  console.log(`Server started on port ${port}`)
});  



/********************
  * START MONGOOSE
 ********************/
mongoose.Promise = Promise;
mongoose.connect(
  keys.MONGODB_URI, {
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
