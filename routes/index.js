var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

var User = require('../models/users');

// GET all users
router.get('/', function(req, res) {
	User.find(function(err, users) {
		res.send(users);
	});
});

//POST new user
router.post('/adduser',function(req, res) {

	//Build object from form data
	var newPerson = {
		username : req.body.username,
		email : req.body.email
	};

	console.log(req);

	//Save to db
	new User(newPerson)
	.save(function(err, data) {		
		if (err) {
			return res.send(err);			
		}
		res.send(data);
	});
});

//REMOVE a user 
router.delete('/delete/:id', function(req, res) {

	User.remove({
		_id: req.params.id
	}, function(err) {
		if (err) {
			return res.send(err);
		}
		res.sendStatus(200);
	});
});

//UPDATE a user
router.put('/update/:id',function(req, res) {

	//Get user
	User.findOne({_id: req.params.id}, function(err, user){
		if (err) {
			return res.send(err);
		}


		user.username = req.body.username;
		user.email = req.body.email;

		//Save to db
		user.save(function(err, data) {
			if (err) {
				return res.send("Error saving to database!!");
			} 
			res.send(data);
		});
	});
});

module.exports = router;