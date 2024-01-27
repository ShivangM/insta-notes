import { ethers } from 'hardhat';
import { config } from 'dotenv';
config();

const { AGREMENT_CONTRACT_ADDRESS } = process.env;

async function main() {
  const contract = await ethers.getContractAt(
    'DocumentAgreement',
    AGREMENT_CONTRACT_ADDRESS!
  );

  await contract.uploadDocument(
    'SheConfident',
    'Women empowerment platform that focus on generating NFT for confident faces of women and help them gain confidence on camera and ability to list them on our marketplace to earn.'
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
