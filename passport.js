import userModel from "./db_model.js";
import genKeyPair from "./generateKeys.js";

import passport from "passport-jwt";
const jwtStrategy = passport.Strategy;
const extractJWT = passport.ExtractJwt;

// The JWT payload received as header from login endpoint is passed into the verify callback
// Private Key: sign JWT; Public Key: Verify JWT
const setupPassport = async (passport) => {
  //extract publicKey from genKeyPair obj
  const { publicKey } = await genKeyPair();

  const options = {
    jwtFromRequest: extractJWT.fromAuthHeaderWithScheme("JWT"),
    secretOrKey: publicKey,
    algorithm: ["RS256"],
  };

  passport.use(
    //this callback func is called only when we use passport.authenticate() anywhere
    new jwtStrategy(options, function (jwt_payload, done) {
      console.log("setupPassport function called");
      //if we reach here, jwt is successfully verified by passport

      //now we need to return the user back to update global state
      // therefore we use our db

      //it also double checks the authorization. If we create a jwt from official
      //website with same key..but with wrong 'id(jwt_payload.id)'
      //authorization enters else case and eventually fails

      // We will assign the `id` property on the JWT to the database ID of user
      userModel
        .findById(jwt_payload.id)
        .then((user) => {
          console.log("entered then ");
          //if the user exists in the db
          if (user) {
            console.log("passport user", user);
            //done syntax => done(err, user(if exists else false))
            return done(null, user);
          }
          //else is called when jwt is verified but id does'nt match; ie no such user exists
          else {
            console.log("else in passport");
            return done(null, false);
          }
        })
        .catch((err) => {
          //server exceptions
          done(err, false);
          console.log("catch err in passport.js", err);
        });
    })
  );
};

export default setupPassport;
