import { decode } from "bs58";

// Decode the base58 encoded secret key
let sk = decode(
  "your secret key" // do not push your secret key to github
);

// Log the decoded secret key
console.log(`secret key is: ${sk}`);

// Keep your decoded secret key in "wallet.json" and do not push it to GitHub
