//Here we will create a seperate func for signing jwt which can be used with
//both login and register routes and aviod duplicacy

import jwt from "jsonwebtoken";

const signJwtFunc = (jwt_payload) => {
  //Sign token
  return new Promise((resolve, reject) => {
    jwt.sign(
      jwt_payload,
      "secret",
      {
        expiresIn: 30, // 30sec
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
};

export default signJwtFunc;
