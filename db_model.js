import mongoose from "mongoose";
//defining a schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//constructing model out of that schema
const userModel = mongoose.model("userModel", userSchema);

export default userModel;
