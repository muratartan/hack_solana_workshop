import { AppProps } from "next/app";
import { FC, useMemo } from "react";

// ------- Wallet adoption imports ---------------------
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";

// ---------- Related custom components, not required for wallet adoption ---------------------
import { SendSOLToRandomAddress } from "components/SendSOLToRandomAddress";
import { RequestAirdrop } from "components/RequestAirdrop";
import Notifications from "../components/Notification";
require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");

const App: FC<AppProps> = () => {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(() => [new UnsafeBurnerWalletAdapter()], [network]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Notifications />
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <WalletMultiButton className="mb-3" />
            <WalletDisconnectButton className="mb-5" />
            <SendSOLToRandomAddress />
            <RequestAirdrop />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
};

export default App;
