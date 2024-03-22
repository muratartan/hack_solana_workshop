import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import React, { FC, useCallback } from "react";
import { notify } from "utils/notifications";

export const SendSOLToRandomAddress: FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClick = useCallback(async () => {
    try {
      if (!publicKey) {
        return notify({
          type: "error",
          message: "Error",
          description: "Wallet not connected!",
        });
      }

      const lamports = await connection.getMinimumBalanceForRentExemption(0);

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: Keypair.generate().publicKey,
          lamports,
        })
      );

      const {
        context: { slot: minContextSlot },
        value: { blockhash, lastValidBlockHeight },
      } = await connection.getLatestBlockhashAndContext();

      const signature = await sendTransaction(transaction, connection, {
        minContextSlot,
      });

      await connection.confirmTransaction({
        blockhash,
        lastValidBlockHeight,
        signature,
      });
      notify({
        type: "success",
        message: "Success",
        description: "Transaction successful!",
      });
    } catch (e) {
      notify({ type: "error", message: "error", description: e.message });
    }
  }, [publicKey, sendTransaction, connection]);

  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3 mt-8"
    >
      Send SOL to a random address!
    </button>
  );
};
