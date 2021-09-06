import express from "express";
const registerRouter = express.Router();

// Load input validation
import validateRegisterInput from "../../validation/validate_Register.js";

// Load User model
import userModel from "../../db_model.js";
import signJwtFunc from "../../signJwt.js";

// @route POST api/users/register
// @desc Register user
// @access Public
registerRouter.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // If any error exists in form
  if (!isValid) {
    //these errors will be used in authActions axios req catch method
    return res.status(400).json(errors);
  }

  userModel.findOne({ email: req.body.email }).then((user) => {
    //check if email already exists
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    }
    //else create a new user
    else {
      const newUser = userModel
        .create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        })
        .then(async (user) => {
          console.log("user created:", user);

          //Direct push to dashboard when user registered successfully
          // Create JWT Payload
          const jwt_payload = {
            id: user._id,
            name: user.name,
          };

          //call signJwtFunc
          const token = await signJwtFunc(jwt_payload);
          console.log("func return:", token);

          res.status(200).json({
            success: true,
            token: "JWT " + token,
          });
        });
    }
  });
});

export default registerRouter;
