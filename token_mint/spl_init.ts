import { Keypair, Connection, Commitment } from "@solana/web3.js";
import { createMint } from "@solana/spl-token";
import wallet from "./wallet.json";

// This program creates a "token mint" account on-chain

// Load the keypair from the wallet.json file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

// Specify the commitment level as "confirmed" for transaction confirmation
const commitment: Commitment = "confirmed";

// Establish a connection to the Solana Devnet with the specified commitment level
const connection = new Connection("https://api.devnet.solana.com", commitment);

// Asynchronous function to create a new token mint account
(async () => {
  try {
    // Create a new token mint
    const mint = await createMint(
      connection,
      keypair,
      keypair.publicKey,
      null,
      6 // Specify the number of decimal places for the token
    );
    // Log the address of the created mint
    console.log(`mint address is: ${mint}`);
  } catch (error) {
    // Log an error message if something goes wrong
    console.log(`Oops, something went wrong: ${error}`);
  }
})();
