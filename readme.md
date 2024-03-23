// project folder creation
mkdir token_mint
cd token_mint
yarn init -y
code .

// dependencies
yarn add @types/node typescript @solana/web3.js bs58 @solana/spl-token @metaplex-foundation/mpl-token-metadata @metaplex-foundation/umi @metaplex-foundation/umi-bundle-defaults @metaplex-foundation/umi-uploader-bundlr
yarn add -D ts-node

// ts-confiugations
yarn tsc --init --rootDir ./ --outDir ./dist --esModuleInterop --lib ES2020 --module commonjs --resolveJsonModule true --noImplicitAny true

// project files
touch keygen.ts airdrop.ts spl_init.ts spl_mint.ts spl_transfer.ts spl_metadata.ts sk_decode.ts wallet.json

// script commands
"scripts": {
"keygen": "ts-node ./keygen.ts",
"airdrop": "ts-node ./airdrop.ts”,
"sk_decode": "ts-node ./sk_decode.ts",
"spl_init": "ts-node ./cluster1/spl_init.ts",
"spl_mint": "ts-node ./cluster1/spl_mint.ts",
"spl_transfer": "ts-node ./cluster1/spl_transfer.ts",
"spl_metadata": "ts-node ./spl_metadata.ts"
},
