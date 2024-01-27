import { ethers } from 'hardhat';

async function main() {
  const DocumentAgreement = await ethers.getContractFactory(
    'DocumentAgreement'
  );

  // Start deployment, returning a promise that resolves to a contract object
  const blogList = await DocumentAgreement.deploy(2);
  console.log('Contract deployed to address:', blogList.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
