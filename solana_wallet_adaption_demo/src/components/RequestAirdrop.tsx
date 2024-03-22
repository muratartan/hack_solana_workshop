import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import type { TransactionSignature } from "@solana/web3.js";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React, { useCallback, FC, useState } from "react";
import { notify } from "../utils/notifications";

export const RequestAirdrop: FC = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [loading, setLoading] = useState(false);

  const onClick = useCallback(async () => {
    let signature: TransactionSignature | undefined = undefined;

    try {
      if (!publicKey) {
        return notify({
          type: "error",
          message: "Error",
          description: "Wallet not connected!",
        });
      }

      setLoading(true);
      signature = await connection.requestAirdrop(publicKey, LAMPORTS_PER_SOL);
      notify({
        type: "info",
        message: "Info",
        description: "Airdrop requested",
      });

      await connection.confirmTransaction(signature, "processed");
      notify({
        type: "success",
        message: "Success",
        description: "Airdrop successful!",
      });
    } catch (error: any) {
      notify({
        type: "error",
        message: "Error",
        description: `Airdrop failed! ${error?.message}`,
      });
    }
    setLoading(false);
  }, [publicKey, connection]);

  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {loading ? "Requested ..." : "Request Airdrop"}
    </button>
  );
};
