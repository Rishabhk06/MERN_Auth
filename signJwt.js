//Here we will create a seperate func for signing jwt which can be used with
//both login and register routes and aviod duplicacy

import jwt from "jsonwebtoken";
import genKeyPair from "./generateKeys.js";

const signJwtFunc = async (jwt_payload) => {
  //extract privateKey from genKeyPair obj
  const { privateKey } = await genKeyPair();

  //Sign token
  return new Promise((resolve, reject) => {
    jwt.sign(
      jwt_payload,
      privateKey,
      {
        expiresIn: 30, // 30sec
        algorithm: "RS256",
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
