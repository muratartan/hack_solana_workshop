import { decode } from "bs58";

let sk = decode(
  "your secret key" // DO NOT push your secret key to Github
);

console.log(`secret key is: ${sk}`);

// save your decoded secret key in "wallet.json"
