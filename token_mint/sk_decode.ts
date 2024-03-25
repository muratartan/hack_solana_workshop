import { decode } from "bs58";

let sk = decode(
  "<your secret key>" // do not push your secret key to github
);

console.log(`secret key is: ${sk}`);

// keep your decoded secret key in "wallet.json" and do not push it to Github
