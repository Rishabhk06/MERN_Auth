import express from "express";
import mongoose from "mongoose";
import userModel from "./db_model.js";
import registerRouter from "./routes/apiRoutes/register.js";
import loginRouter from "./routes/apiRoutes/login.js";
import passport from "passport";

const app = express();

//setting middlewares to get req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, console.log("Server started at port 3000"));

//Setting Mongo connection
const atlasURL =
  "mongodb+srv://rishabh:rishabh@users.xclt4.mongodb.net/users?retryWrites=true&w=majority";

//establishing mongoose conn with mongoDB dtbse
mongoose.connect(atlasURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//checking for a succ connction
mongoose.connection
  .then(() => {
    console.log("Mongoose connection established with mongodb database");
  })
  .catch((err) => {
    console.log(err);
  });

// Routes
app.use("/api/users", registerRouter);
app.use("/api/users", loginRouter);

//initialise passport
app.use(passport.initialize());
