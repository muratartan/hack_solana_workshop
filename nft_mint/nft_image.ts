import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
  createGenericFile,
  createSignerFromKeypair,
  signerIdentity,
} from "@metaplex-foundation/umi";
import { createBundlrUploader } from "@metaplex-foundation/umi-uploader-bundlr";
import { readFile } from "fs/promises";
import wallet from "./wallet.json";

// Create an instance of Umi and establish connection to Solana Devnet
const umi = createUmi("https://api.devnet.solana.com");

// Create an uploader for uploading images
const uploader = createBundlrUploader(umi);

// Load the keypair from the wallet.json file
let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));

// Create a signer from the keypair
const signer = createSignerFromKeypair(umi, keypair);

// Specify the signer identity for Umi
umi.use(signerIdentity(signer));

// Asynchronous function to upload an image
(async () => {
  try {
    // Read the file and keep in a buffer
    const file = "./generug.png";
    const buffer = await readFile(file);

    // Create a generic file using the buffer and file name
    const image = createGenericFile(buffer, "generug.png");

    // Upload the image using the uploader
    const [myUri] = await uploader.upload([image]);

    // Log the URI of the uploaded image
    console.log(`image uri is: ${myUri}`);
  } catch (e) {
    // Log an error message if something goes wrong
    console.log(`sth went wrong: ${e}`);
  }
})();
