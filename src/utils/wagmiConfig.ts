import { createConfig, http } from 'wagmi';
import { optimismSepolia } from 'wagmi/chains';
import { walletConnect } from '@wagmi/connectors';

//@ts-ignore
export const config = createConfig({
  chains: [optimismSepolia],
  connectors: [
    walletConnect({
      projectId: '7781f84b448223d2f0d14ebb8e738992',
    }),
  ],
  transports: {
    [optimismSepolia.id]: http(
      'https://opt-sepolia.g.alchemy.com/v2/OKJ5tcBth19d9fVAysQcfnXF2NY1w7bx'
    ),
  },
});
