var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require("../models/user");
const UserService = require('../services/user');

//serialize and deserialize
passport.serializeUser(function(user, cb){
    cb(null, user);
});

passport.deserializeUser(function(id, cb){
  User.findById(id, function(err, user){
    cb(err,user);
  });
});

//Middlewares
passport.use('local', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
  }, function(req, username, password, cb){
    console.log(23);
    UserService.findByUsername(username)
    .then((err, user) => {console.log(2);
      if (err) return cb(err);

      if(!user){
        return cb(null,false,req.flash('loginMessage', 'Username not found'));
      }

      if (!user.comparePassword(password)){
        return cb(null, false, req.flash('loginMessage', 'Password does not match'));
      }

      return cb(null,user);
    })
    .catch((err) => ErrorService.sendError(res, err));
  }
));

