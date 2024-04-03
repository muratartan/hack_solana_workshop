# How to

## Installation:
1. Open the project folder in an IDE such as Visual Studio Code (VS Code) or any similar tool.
2. Install dependencies by executing either the `yarn` command or, if you're using npm, utilize the `npm install` command.

## Usage:
1. Launch your web3 wallet application, such as Phantom or a similar tool, and ensure that you are connected to the devnet.
2. Locate and copy your secret key.
3. Open the `sk_decode.ts` file, insert your secret key into the designated location, and execute the file using the `yarn sk_decode` command. If you are using npm, utilize the commands in `npm run <file name>` format. Copy the decoded secret key displayed in the terminal.
4. Navigate to `wallet.json`, remove the placeholder fake secret key, and replace it with your own secret key saved in an array format.
5. Proceed to the `nft_image.ts` file and execute it via the `yarn nft_image` command. Copy the generated image URI to a secure location.
6. Open the `nft_metadata.ts` file, paste the obtained image URI into the specified location, and save the file. You can choose to leave the fields `name`, `symbol`, `description`, and `attributes` unchanged or customize them to your preferences.
7. Execute the `yarn nft_metadata` command.
8. Copy the resulting image URI to a secure location.
9. Open the `nft_mint.ts` file, insert the **image URI** obtained from the `nft_metadata.ts` file into the `uri` field, and save the file.
10. Execute the `yarn nft_mint` command.
11. Verify the mint address provided in the terminal by searching for it in the Solana explorer to confirm the successful minting of your NFT.
12. Ensure that your NFT is visible in your web3 wallet application.
