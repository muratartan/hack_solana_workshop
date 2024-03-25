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

const umi = createUmi("https://api.devnet.solana.com");

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);
umi.use(signerIdentity(signer));
umi.use(mplTokenMetadata());

const mint = generateSigner(umi);

(async () => {
  try {
    const uri =
      "https://arweave.net/DYTSgerCE3Xd_R2-n5oXUCqD-3UQgZU_stKeorL_uVs";
    let tx = createNft(umi, {
      mint,
      name: "pixel carpet",
      symbol: "PC",
      uri,
      sellerFeeBasisPoints: percentAmount(4),
    });
    let result = await tx.sendAndConfirm(umi);
    const signature = base58.encode(result.signature);
    console.log(
      `succesfully minted, tx is here:https://explorer.solana.com/tx/${signature}?cluster=devnet`
    );
    console.log(`mint address is: ${mint.publicKey}`);
  } catch (error) {
    console.log(`sth went wrong: ${error}`);
  }
})();
