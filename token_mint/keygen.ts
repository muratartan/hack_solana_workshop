import { Keypair } from "@solana/web3.js";

let kp = Keypair.generate();

console.log(`you generated a new solana wallet: ${kp.publicKey.toBase58()}`);
console.log(`secret key is: ${kp.secretKey}`);

// public key 5MxKKK97pARWrtDRfyHBDP4eiTPyopVzEpWNJrUnDCGk
