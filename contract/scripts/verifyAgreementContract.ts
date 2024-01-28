import { run } from 'hardhat';
import { config } from 'dotenv';
config();

async function main() {
  // add the contract address that you deployed in the previous steps
  const contractAddress = process.env.AGREEMENT_CONTRACT_ADDRESS;

  console.log(contractAddress);

  if (!contractAddress) {
    console.error(
      'Contract address not provided. Please set AGREEMENT_CONTRACT_ADDRESS in your .env file.'
    );
    process.exit(1);
  }

  try {
    await run('verify:verify', {
      address: contractAddress,
      constructorArguments: [], // Add constructor arguments if your contract has any
      contract: 'contracts/DocumentAgreement.sol:DocumentAgreement', // Corrected typo in contract name
    });

    console.log('Contract verification successful!');
  } catch (error: any) {
    if (error.message.toLowerCase().includes('already verified')) {
      console.log('Already verified!');
    } else {
      console.error(error);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
