import '@nomiclabs/hardhat-ethers';
import '@nomicfoundation/hardhat-toolbox-viem';
import '@nomicfoundation/hardhat-verify';
import { HardhatUserConfig } from 'hardhat/config';
import dotenv from 'dotenv';
dotenv.config();

const INFURA_API_KEY = process.env.INFURA_API_KEY;
const OP_SEPOLIA_PRIVATE_KEY = process.env.OP_SEPOLIA_PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const config: HardhatUserConfig = {
  solidity: '0.8.19',
  networks: {
    opSepolia: {
      url: `https://optimism-sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [OP_SEPOLIA_PRIVATE_KEY!],
    },
  },
  etherscan: {
    apiKey: {
      optimisticSepolia: ETHERSCAN_API_KEY!,
    },
    customChains: [
      {
        network: 'optimisticSepolia',
        chainId: 11155420,
        urls: {
          apiURL: `https://api-sepolia-optimistic.etherscan.io/api`,
          browserURL: `https://sepolia-optimism.etherscan.io/`,
        },
      },
    ],
  },
  sourcify: {
    enabled: true,
  },
};

export default config;
