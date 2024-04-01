
# Project Name

This repo aims to create your own token on Solana easily

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

1. Switch to devnet using your wallet address and find your secret key.
2. Open the `sk_decode.ts` file, paste your secret key, and run the following command:

If you're using Yarn:

```
yarn sk_decode
```

If you're using npm:

```
npm run sk_decode
```

3. Copy the decoded secret key and paste it into the `wallet.json` file.

### B. Token Creation

1. Open the `spl_init` file and run the following command:

```
yarn spl_init
```

2. Open the `spl_metadata.ts` file, add your mint address to the `mint` variable, and save the file. Then, create token metadata by running the following command:

```
yarn spl_metadata
```

3. Make sure your token is created by searching the mint address on Solana Explorer.
4. Open the `spl_mint.ts` file, paste your mint address into the `mint` variable, and run the following command:

```
yarn spl_mint
```

5. Open your Web3 wallet and check if the tokens are in your wallet.

### Sending Tokens

To send tokens to another address, open the `spl_transfer.ts` file, add the recipient's address to the `to` variable, and run the following command:

```
yarn spl_transfer
```

## License

This project is licensed under the [MIT License](LICENSE).
````

You can save this content into a file named `README.md`.
