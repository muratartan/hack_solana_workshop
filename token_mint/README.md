
# How to

This repo aims to create your own token on **Solana** easily

## Requirements

To run this project on your local machine, you need the following:

- [Node.js](https://nodejs.org/) installed.
- Optionally, but highly recommended [Yarn package manager](https://yarnpkg.com/).

## Installation

1. Copy the project folder to your machine:

2. Open the project with an IDE (e.g., Visual Studio Code).

3. Install dependencies by running the following command in the project directory:

If you're using Yarn:

```
yarn
```

If you're using npm:

```
npm install
```

## Token Creation Steps

### A. Keypair Operations

1. If you want to use your web3 wallet (e.g., Phantom), switch to devnet on your web3 wallet, find and copy your secret key.
2. Open the `sk_decode.ts` file, paste your secret key where it says **"your secret key"**, and run the following command:

If you're using Yarn:

```
yarn sk_decode
```

If you're using npm:

```
npm run sk_decode
```
- Copy the decoded secret key and paste it into the `wallet.json` file in array format.
- For the following steps, use the same **`npm run <folder name>`** pattern to run the files if you're using npm.

3. If you want to generate a new keypair from scratch, open the `keygen.ts` file, run the following command:

```
yarn keygen
```
Then, securely save the public and secret keys generated and repeat **Step 2** above.

### B. Token Creation

1. Open the `spl_init` file and run the following command:

```
yarn spl_init
```
Copy the mint address of the newly created token appears in the console and save it.

2. Open the `spl_metadata.ts` file.
- Paste the **mint address** you copied in the previous step into the `mint` variable.
- In the `data` variable, specify the name of your token to the `name` field and its abbreviation to the `symbol` field.
- Save the file. Then, create token metadata by running the following command:

```
yarn spl_metadata
```
3. Verify Token Creation:
- Use [Solana Explorer](https://explorer.solana.com/?cluster=devnet) to search for the **mint address** to confirm your token's creation.
- Ensure you switch to the Devnet for searching.

4. Mint Tokens:
- Open the `spl_mint.ts` file.
- Paste your token's **mint address** into the `mint` variable.
- Execute
```
yarn spl_mint
```
- Check if the tokens appear in your wallet and confirm that you are on the Devnet.
- 
5. Transfer Tokens:
- If the tokens are in your wallet, you can transfer them to another address using your web3 wallet or programmatically.
- To transfer programmatically, open the `spl_transfer.ts` file.
- Paste your **mint address** into the appropriate location.
- Below the recipient address comment, paste the address you wish to send tokens to into the `to` variable.
- Execute
  ```
  yarn spl_transfer
  ```
- Verify the transfer through the link provided in the console.

