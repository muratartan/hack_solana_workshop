import {
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  TransactionInstruction,
  Keypair,
} from "@solana/web3.js";
import { AnchorProvider, Program, Wallet } from "@project-serum/anchor";
import { IDL, IDL_TYPE } from "./counter_idl";

// Initialize connection and provider
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
import wallett from "./wallet.json";
const wallet = new Wallet(Keypair.fromSecretKey(new Uint8Array(wallett)));
//const wallet = Keypair.fromSecretKey(new Uint8Array(wallett));
const provider = new AnchorProvider(connection, wallet, {});

// Initialize the program
const programId = new PublicKey("CounNZdmsQmWh7uVngV9FXW2dZ6zAgbJyYsvBpqbykg");
const program = new Program<IDL_TYPE>(IDL, programId, provider);

// Known counter account address
const counterPubkey = new PublicKey(
  "2KNGg83iNNXrhDgcBL3Q7u5jfepZemcc6fxMeAxPxctf"
);

// Helper function to create and send transaction
async function sendTransaction(instruction: TransactionInstruction) {
  const transaction = new Transaction().add(instruction);
  const signature = await provider.sendAndConfirm(transaction);
  console.log("Transaction signature:", signature);
  return signature;
}

// Increment the counter
async function incrementCounter() {
  const instruction = await program.methods
    .increment()
    .accounts({
      counter: counterPubkey,
    })
    .instruction();

  return sendTransaction(instruction);
}

// Decrement the counter
async function decrementCounter() {
  const instruction = await program.methods
    .decrement()
    .accounts({
      counter: counterPubkey,
    })
    .instruction();

  return sendTransaction(instruction);
}

// Set the counter value
async function setCounter(value: number) {
  const instruction = await program.methods
    .set(value)
    .accounts({
      counter: counterPubkey,
    })
    .instruction();

  return sendTransaction(instruction);
}

// This code close the counter account
// Note: Please do not close the account
async function closeCounter() {
  const instruction = await program.methods
    .close()
    .accounts({
      payer: provider.wallet.publicKey,
      counter: counterPubkey,
    })
    .instruction();

  return sendTransaction(instruction);
}

// Example usage
async function main() {
  try {
    // Increment the counter
    await incrementCounter();
    console.log("Counter incremented");

    // Set the counter to a specific value
    await setCounter(5);
    console.log("Counter set to 5");

    // Decrement the counter
    await decrementCounter();
    console.log("Counter decremented");
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
