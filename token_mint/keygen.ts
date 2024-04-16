import { Keypair } from "@solana/web3.js";

// Generate a new keypair using the Keypair class from the Solana Web3.js library
let kp = Keypair.generate();

// Log the base58 representation of the public key associated with the generated keypair
console.log(`wallet generated: ${kp.publicKey.toBase58()}`);

// Log the secret key of the generated keypair
console.log(`secret key is: ${kp.secretKey}`);
