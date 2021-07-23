//setting up passport-jwt strategy
//Note: yaha abhi sirf passport setup kr rhe h...jwt token baad mei login route se generate hoga
//abhi sirf us token ko handle krne ka tareeka likh rhe h

import mongoose from "mongoose";
import userModel from "./db_model";

import passport from "passport-jwt";
const jwtStrategy = passport.Strategy;
const extractJWT = passport.ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secret",
  issuer: "admin_rishabh",
  jsonWebTokenOptions: {
    maxage: 60, //60sec = 1min
  },
};

//now setting the passport strategy
// The JWT payload received as header from login endpoint is passed into the verify callback
passport.use(
  new JwtStrategy(options, function (jwt_payload, done) {
    // We will assign the `id` property on the JWT to the database ID of user
    userModel
      .findById(jwt_payload.id)
      .then((user) => {
        //if the user exists in the db
        if (user) {
          //done syntax => done(err, user(if exists else false))
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
      .catch((err) => {
        done(err, false);
        console.log(err);
      });
  })
);
