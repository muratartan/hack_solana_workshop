// metadata account is a part of "token mint account"
// it stores detailed info about the token

import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
  createMetadataAccountV3,
  CreateMetadataAccountV3InstructionAccounts,
  CreateMetadataAccountV3InstructionArgs,
  DataV2Args,
} from "@metaplex-foundation/mpl-token-metadata";
import {
  createSignerFromKeypair,
  signerIdentity,
  publicKey,
} from "@metaplex-foundation/umi";

import wallet from "./wallet.json";

// Define the mint address for the token
const mint = publicKey("write your mint address here");

// Create an instance of Umi and establish connection to Solana Devnet
const umi = createUmi("https://api.devnet.solana.com");

// Load the keypair from the wallet.json file
const keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));

// Create a signer from the keypair
const signer = createSignerFromKeypair(umi, keypair);

// Specify the signer identity for Umi
umi.use(signerIdentity(signer));

// Asynchronous function to create token metadata account
(async () => {
  try {
    // Define accounts required for creating metadata account
    let accounts: CreateMetadataAccountV3InstructionAccounts = {
      mint,
      mintAuthority: signer,
    };

    // Define data for the metadata account
    let data: DataV2Args = {
      name: "token name", // write your token name here
      symbol: "SOL", // write your token symbol here
      uri: "https://arweave.net/1234",
      sellerFeeBasisPoints: 500,
      creators: null,
      collection: null,
      uses: null,
    };

    // Define arguments for creating metadata account instruction
    let args: CreateMetadataAccountV3InstructionArgs = {
      data,
      isMutable: true,
      collectionDetails: null,
    };

    // Create the transaction for creating metadata account
    let tx = createMetadataAccountV3(umi, {
      ...accounts,
      ...args,
    });

    // Send and confirm the transaction
    let result = await tx
      .sendAndConfirm(umi)
      .then((r) => r.signature.toString());

    // Log the signature of the transaction
    console.log(result);
  } catch (e) {
    // Log an error message if something goes wrong
    console.error(`Oops, something went wrong: ${e}`);
  }
})();
