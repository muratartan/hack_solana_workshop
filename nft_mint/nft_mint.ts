import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
  createSignerFromKeypair,
  signerIdentity,
  generateSigner,
  percentAmount,
} from "@metaplex-foundation/umi";
import {
  createNft,
  mplTokenMetadata,
} from "@metaplex-foundation/mpl-token-metadata";
import base58 from "bs58";
import wallet from "./wallet.json";

// Create an instance of Umi and establish connection to Solana Devnet
const umi = createUmi("https://api.devnet.solana.com");

// Load the keypair from the wallet.json file
let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));

// Create a signer from the keypair
const signer = createSignerFromKeypair(umi, keypair);

// Specify the signer identity for Umi
umi.use(signerIdentity(signer));

// Use Metaplex's MPL token metadata functionality
umi.use(mplTokenMetadata());

// Generate a signer for the new NFT mint
const mint = generateSigner(umi);

// Asynchronous function to create and mint a new NFT
(async () => {
  try {
    // Define the URI for the NFT metadata (e.g., image)
    const uri =
      "https://arweave.net/DYTSgerCE3Xd_R2-n5oXUCqD-3UQgZU_stKeorL_uVs"; // delete this uri and paste your own image uri obtained from "nft_metadata" file

    // Create the transaction to create the NFT
    let tx = createNft(umi, {
      mint,
      name: "pixel carpet",
      symbol: "PC",
      uri,
      sellerFeeBasisPoints: percentAmount(4), // Specify seller fee basis points
    });

    // Send and confirm the transaction
    let result = await tx.sendAndConfirm(umi);

    // Encode the transaction signature in base58 format, because Solana uses this format
    const signature = base58.encode(result.signature);

    // Log the success message along with the transaction ID and mint address
    console.log(
      `succesfully minted, tx is here:https://explorer.solana.com/tx/${signature}?cluster=devnet`
    );
    console.log(`mint address is: ${mint.publicKey}`);
  } catch (error) {
    // Log an error message if something goes wrong
    console.log(`sth went wrong: ${error}`);
  }
})();
