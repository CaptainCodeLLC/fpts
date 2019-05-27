<<<<<<< HEAD
//Config Vars - mLab
require('dotenv').config();
const keys = require('./config/keys');

//Express Server
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

//Init the application with express
const app = express();
const db = require('./config/keys').mongoURI;

const users = require('./routes/api/user');

//connect to MongoDB mLab
mongoose.connect(db, { useNewUrlParser: true })
        .then(() => console.log("MongoDB connected"))
        .catch(err => console.log(err)); 

app.use(morgan('short'))
const port  = process.env.PORT || process.env.DEV_PORT;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


//user routes

require('./routes/api/user')(app)
require('./models/User');



app.listen(port, (err) => {
  if (err) return console.log(`ERROR on port ${port}`); 
  console.log(`Server started on port ${port}`)
});  

// app.get('/' , (req,res)=>{
//   res.send("Welcome to the FPTS Backend")
// })

// app.use('/api/users', users)

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
=======
>>>>>>> c0397e4d447cc9c8791d3688da74fd46b55d3595
