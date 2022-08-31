require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    testnet: {
      url: process.env.BSC_TESTNET_RPC_PROVIDER,
      chainId: 97,
      accounts: process.env.PRIVATE_KEY,
    },
    mainnet: {
      url: process.env.BSC_MAINNET_RPC_PROVIDER,
      chainId: 56,
      accounts: process.env.PRIVATE_KEY,
    },
    mumbai: {
      url: process.env.POLYGON_MUMBAI_RPC_PROVIDER,
      accounts: process.env.PRIVATE_KEY 
    }
  },
};
