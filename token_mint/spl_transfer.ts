import { Commitment, Connection, Keypair, PublicKey } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";
import wallet from "./wallet.json";

// Specify the commitment level as "confirmed" for transaction confirmation
const commitment: Commitment = "confirmed";

// Establish a connection to the Solana Devnet with the specified commitment level
const connection = new Connection("https://api.devnet.solana.com", commitment);

// Load the keypair from the wallet.json file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

// Define the mint address
const mint = new PublicKey("wite your mint address here");

// Define the recipient address
const to = new PublicKey("write an address to send tokens");

// Asynchronous function to transfer tokens
(async () => {
  try {
    // Get or create the Associated Token Account (ATA) for the sender
    const from_ata = await getOrCreateAssociatedTokenAccount(
      connection,
      keypair,
      mint,
      keypair.publicKey
    );

    // Get or create the Associated Token Account (ATA) for the recipient
    const to_ata = await getOrCreateAssociatedTokenAccount(
      connection,
      keypair,
      mint,
      to
    );

    // Transfer tokens from the sender's ATA to the recipient's ATA
    const tx = await transfer(
      connection,
      keypair,
      from_ata.address,
      to_ata.address,
      keypair.publicKey,
      1000000n // Specify the number of tokens to transfer
    );

    // Log the success message along with the transaction ID
    console.log(
      `Succesfully Minted!. Transaction Here: https://explorer.solana.com/tx/${tx}?cluster=devnet`
    );
  } catch (error) {
    // Log an error message if something goes wrong
    console.error(`Oops, something went wrong: ${error}`);
  }
})();
