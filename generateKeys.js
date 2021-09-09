import fs, { existsSync } from "fs";
import keypair from "keypair";

//generates pub/priv key pair for jwt signing and verif using keypair lib
const genKeyPair = () => {
  console.log("genKeyPair func called");

  return new Promise((res, rej) => {
    //if keyFiles do not exist;create new
    if (
      !existsSync("./keys/publicKey.key") &&
      !existsSync("./keys/privateKey.key")
    ) {
      const pair = keypair(2048);

      const publicKey = pair.public;
      const privateKey = pair.private;

      fs.mkdirSync("./keys");
      fs.writeFileSync("./keys/publicKey.key", publicKey);
      fs.writeFileSync("./keys/privateKey.key", privateKey);
      res({ privateKey, publicKey });
    } else {
      //keys already exist; read from file
      const privateKey = fs.readFileSync("./keys/privateKey.key", "utf8");
      const publicKey = fs.readFileSync("./keys/publicKey.key", "utf8");

      res({ privateKey, publicKey });
    }
  });
};

export default genKeyPair;
