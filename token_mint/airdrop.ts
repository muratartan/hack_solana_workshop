import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import wallet from "./wallet.json";

// Load the keypair from the wallet.json file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

// Establish a connection to the Solana Devnet
const connection = new Connection("https://api.devnet.solana.com");

// Asynchronous function to request airdrop
(async () => {
  try {
    // Request an airdrop of 2 SOL to the public key associated with the keypair
    const txhash = await connection.requestAirdrop(
      keypair.publicKey,
      2 * LAMPORTS_PER_SOL
    );
    // Log the success message along with the transaction hash
    console.log(`Success! Check out your TX here: 
    https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
  } catch (e) {
    // Log an error message if something goes wrong
    console.error(`Oops, something went wrong: ${e}`);
  }
})();
