'use client';
import { useAccount } from 'wagmi';
import { Account } from './Account';
import { WalletOptions } from './WalletOptions';

function ConnectWallet() {
  const { isConnected } = useAccount();

  if (isConnected) return <Account />;
  return (
    <div>
      {/* @ts-ignore */}
      <WalletOptions />
    </div>
  );
}

export default ConnectWallet;
