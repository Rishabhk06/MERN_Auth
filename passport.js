//setting up passport-jwt strategy
//Note: yaha abhi sirf passport setup kr rhe h...jwt token baad mei login route se generate hoga
//abhi sirf us token ko handle krne ka tareeka likh rhe h

import mongoose from "mongoose";
import userModel from "./db_model.js";

import passport from "passport-jwt";
const jwtStrategy = passport.Strategy;
const extractJWT = passport.ExtractJwt;

const options = {
  jwtFromRequest: extractJWT.fromAuthHeaderWithScheme("JWT"),
  secretOrKey: "secret",
};
console.log("options", options.jwtFromRequest);

//now setting the passport strategy
// The JWT payload received as header from login endpoint is passed into the verify callback

const setupPassport = (passport) => {
  passport.use(
    //this callback func is called only when we use passport.authenticate() anywhere
    new jwtStrategy(options, function (jwt_payload, done) {
      console.log("setupPassport function called");
      // We will assign the `id` property on the JWT to the database ID of user
      userModel
        .findById(jwt_payload.id)
        .then((user) => {
          //if the user exists in the db
          if (user) {
            console.log("passport user", user);
            //done syntax => done(err, user(if exists else false))
            return done(null, user);
          } else {
            //no errors but user also does'nt exist
            return done(null, false);
          }
        })
        .catch((err) => {
          done(err, false);
          console.log(err);
        });
    })
  );
};

export default setupPassport;
