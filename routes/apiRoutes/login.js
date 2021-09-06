import express from "express";
const loginRouter = express.Router();

//jsonwebtoken
import signJwtFunc from "../../signJwt.js";

// Load input validation
import validateLoginInput from "../../validation/validate_Login.js";

// Load User model
import userModel from "../../db_model.js";

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
loginRouter.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  userModel.findOne({ email }).then((user) => {
    // Check if user exists in database
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email is not registered" });
    } else {
      // Check if the entered password matches pass in db
      if (user.password === password) {
        // User matched
        // Create JWT Payload
        const jwt_payload = {
          id: user._id,
          name: user.name,
        };

        // Sign token
        //we can also use async/await here as in register route
        //this is es6 method and that is es7method(better and easier)
        signJwtFunc(jwt_payload)
          .then((token) => {
            res.status(200).json({
              success: true,
              token: "JWT " + token,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        //password incorrect
        res.status(400).json({ passwordincorrect: "Password incorrect" });
      }
    }
  });
});

export default loginRouter;
