import '@nomiclabs/hardhat-ethers';
import '@nomicfoundation/hardhat-toolbox-viem';
import { HardhatUserConfig } from 'hardhat/config';
import dotenv from 'dotenv';
dotenv.config();

const INFURA_API_KEY = process.env.INFURA_API_KEY;
const OP_SEPOLIA_PRIVATE_KEY = process.env.OP_SEPOLIA_PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: '0.8.19',
  networks: {
    opSepolia: {
      url: `https://optimism-sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [OP_SEPOLIA_PRIVATE_KEY!],
    },
  },
};

export default config;
