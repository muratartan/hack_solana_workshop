import { Keypair, PublicKey, Connection, Commitment } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, mintTo } from "@solana/spl-token";
import wallet from "./wallet.json";

// Load the keypair from the wallet.json file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

// Specify the commitment level as "confirmed" for transaction confirmation
const commitment: Commitment = "confirmed";

// Establish a connection to the Solana Devnet with the specified commitment level
const connection = new Connection("https://api.devnet.solana.com", commitment);

// Define the number of decimals for the token
const token_decimals = 1_000_000n;

// Define the mint address for the token
const mint = new PublicKey("write your mint address here");

// Asynchronous function to create and mint tokens to an associated token account
(async () => {
  try {
    // Create an Associated Token Account (ATA) for the specified mint and owner
    const ata = await getOrCreateAssociatedTokenAccount(
      connection,
      keypair,
      mint,
      keypair.publicKey
    );
    console.log(`Your ata is: ${ata.address.toBase58()}`);

    // Mint tokens to the associated token account
    const mintTx = await mintTo(
      connection,
      keypair,
      mint,
      ata.address,
      keypair.publicKey,
      100n * token_decimals // Specify the number of tokens to mint
    );
    console.log(`Your mint txid: ${mintTx}`);
  } catch (error) {
    // Log an error message if something goes wrong
    console.log(`Oops, something went wrong: ${error}`);
  }
})();
