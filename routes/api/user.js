const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/Users');

//@route Get request
//@desc  get All items
//@access Public 
router.get('/', (req,res) => {
    User.find()
    .then(users => res.json(users))
});

//@route POST request 
//@desc add some information to the database
//@access Public
router.post('/', (req,res)=>{
    const newUser = new User({
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       emailAddress: req.body.emailAddress,
       phoneNumber: req.body.phoneNumber,
       companyName: req.body.companyName
    });

    newUser.save()
    .then(user => res.json(user));
});

//@route DELETE request 
//@desc Deletes a user based on id from parameters
//@access public
router.delete('/:id', (req,res) => {
    User.findById(req.params.id)
    .then(user => user.remove()
    .then(() => res.json({message:"Successfully removed user"})))
    .catch(err => res.status(404).json({message:"User ID does not exist"}));
});

module.exports = router;