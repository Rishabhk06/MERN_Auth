import express from "express";
import mongoose from "mongoose";
import registerRouter from "./routes/apiRoutes/register.js";
import loginRouter from "./routes/apiRoutes/login.js";
import passport from "passport";

const app = express();

//setting middlewares to get req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server started at port ${port}`));

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

//PASSPORT

//initialise passport
app.use(passport.initialize());

//
import setupPassport from "./passport.js";
setupPassport(passport);

//dashboard further req check
app.get(
  "/api/users/login/1",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(200).json({ success: true, msg: "you are authorized !!!" });
  }
);

//Route to dashboard
app.get(
  "/dashboard",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(200).json({
      success: true,
      msg: "jwt verified using Passport",
      user: req.user,
    });
  }
);

//delete all db entries
// userModel.deleteMany({}).then((res) => {
//   console.log("deleted all");
// });
