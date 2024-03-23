import { Commitment, Connection, Keypair, PublicKey } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";
import wallet from "./wallet.json";

const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

// Mint address
const mint = new PublicKey("EjJ7Ur9DL463nSCkc1d1DGnboPHpqVU4cZnecwsjXe3m");

// Recipient address
const to = new PublicKey("C9ZZ4ggdMceMGPZjuseTapyBR2n7WMFfgLiVBwBd7hFV");

(async () => {
  const from_ata = await getOrCreateAssociatedTokenAccount(
    connection,
    keypair,
    mint,
    keypair.publicKey
  );

  const to_ata = await getOrCreateAssociatedTokenAccount(
    connection,
    keypair,
    mint,
    to
  );

  const tx = await transfer(
    connection,
    keypair,
    from_ata.address,
    to_ata.address,
    keypair.publicKey,
    1000000n
  );

  console.log(
    `Succesfully Minted!. Transaction Here: https://explorer.solana.com/tx/${tx}?cluster=devnet`
  );
})();
