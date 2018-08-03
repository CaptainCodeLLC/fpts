// User Model
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {

    //@route Get request
    //@desc  get All items
    //@access Public 
    app.get('/users', (req,res) => {
        User.find({}, (err, users) => {
            if (err) res.send(err);
            res.send(users);
        })
        
    });
    
    //@route POST request 
    //@desc add some information to the database
    //@access Public
    app.post('/users', (req, res) => {
        const newUser = new User(req.body);
        
        newUser.save()
        /*  then + catch always go together.
            without a catch, when an error occurs, your server
            does not know what to do, and so it will just hang... */ 
            .then(user => res.json(user))
            .catch(err => res.status(400).send('couldn\'t save to database'));
    });
    
    //@route DELETE request 
    //@desc Deletes a user based on id from parameters
    //@access public
    app.delete('/users/:id', (req,res) => {
        User.findById(req.params.id)
        .then(user => user.remove()
        .then(() => res.json({message:"Successfully removed user"})))
        .catch(err => res.status(404).json({message:"User ID does not exist"}));
    });   
}