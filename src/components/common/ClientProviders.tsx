'use client';
import { config } from '@/utils/wagmiConfig';
import { WagmiProvider } from 'wagmi';

type Props = {
  childrens: React.ReactNode[];
};

function ClientProviders({ childrens }: Props) {
  return <WagmiProvider config={config}>{childrens}</WagmiProvider>;
}

export default ClientProviders;
