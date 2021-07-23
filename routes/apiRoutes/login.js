import express from "express";
const loginRouter = express.Router();

//jsonwebtoken
import jwt from "jsonwebtoken";

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
      return res.status(404).json({ emailnotfound: "Email not found" });
    } else {
      // Check if the entered password matches pass in db
      if (user.password === password) {
        // User matched
        // Create JWT Payload
        const jwt_payload = {
          id: user._id,
          email: user.email,
        };

        // Sign token
        jwt.sign(
          jwt_payload,
          "secret",
          {
            expiresIn: 60, // 60sec = 1min
          },
          (err, token) => {
            if (err) {
              console.log(err);
            } else {
              res.json({
                success: true,
                token: "Bearer " + token,
              });
              console.log(token);
            }
          }
        );
      } else {
        //password incorrect
        res.status(400).json({ passwordincorrect: "Password incorrect" });
      }
    }
  });
});

export default loginRouter;
