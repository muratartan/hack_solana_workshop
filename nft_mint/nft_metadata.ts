import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
  createSignerFromKeypair,
  signerIdentity,
} from "@metaplex-foundation/umi";

import { createBundlrUploader } from "@metaplex-foundation/umi-uploader-bundlr";

import wallet from "./wallet.json";

const umi = createUmi("https://api.devnet.solana.com");
const uploader = createBundlrUploader(umi);

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);

umi.use(signerIdentity(signer));

(async () => {
  try {
    const image =
      "https://arweave.net/sI5kg9chjJ1_V4lzDMjKVdgN-KkMgdpt-bw-eWRxR74";
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
    const myUri = await uploader.uploadJson(metadata);
    console.log(`image uri is: ${myUri}`);
  } catch (e) {
    console.log(`sth went wrong: ${e}`);
  }
})();
