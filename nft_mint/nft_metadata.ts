import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
  createSignerFromKeypair,
  signerIdentity,
} from "@metaplex-foundation/umi";
import { createBundlrUploader } from "@metaplex-foundation/umi-uploader-bundlr";
import wallet from "./wallet.json";

// Umi is a new framework for building Javascrript clients for Solana
// It's the alternative of "@solana/web3.js" and provides more functionality

// Create an instance of Umi and establish connection to Solana Devnet
const umi = createUmi("https://api.devnet.solana.com");

// Create an uploader
const uploader = createBundlrUploader(umi);

// Load the keypair from the wallet.json file
let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));

// Create a signer from the keypair
const signer = createSignerFromKeypair(umi, keypair);

// Specify the signer identity for Umi
umi.use(signerIdentity(signer));

// Asynchronous function to upload metadata JSON
(async () => {
  try {
    // Define the metadata for the image
    const image =
      "https://arweave.net/sI5kg9chjJ1_V4lzDMjKVdgN-KkMgdpt-bw-eWRxR74"; // delete this uri and paste your own image uri here
    const metadata = {
      name: "pixel carpet",
      symbol: "PC",
      description: "what a pixelliar carpet",
      image,
      attributes: [
        { trait_type: "color", value: "green" },
        { trait_type: "rarity", value: "1" },
      ],
      properties: {
        files: [
          {
            type: "image/png",
            uri: image,
          },
        ],
      },
    };

    // Upload the metadata JSON
    const myUri = await uploader.uploadJson(metadata);
    console.log(`image uri is: ${myUri}`);
  } catch (e) {
    // Log an error message if something goes wrong
    console.log(`sth went wrong: ${e}`);
  }
})();
