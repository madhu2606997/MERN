var UsersSchema = require('./models/models');
const mongoose = require('mongoose');

const users = mongoose.model('users', UsersSchema);

const db = mongoose.connection;
module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes


    app.get('/users', (req, res) => {
    	console.log("in users");
    	db.on('error', console.error.bind(console, 'connection error:'));
    	db.once('open', function() {
    		console.log("connected");
        users.find(function(err, users) {
            if (err) return res.send(err);
            console.log(users);
            res.json(users)
        })
    })

    })

    // frontend routes =========================================================
    // route to handle all angular requests
    // app.get('*', function(req, res) {
    // 	res.sendfile('./public/index.html');
    // });

};