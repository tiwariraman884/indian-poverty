const hre = require('hardhat');

async function main() {
  console.log(' Deploying SAMPARK Stack Smart Contracts to Vishvasya Blockchain...\n');

  // Get deployer account
  const [deployer] = await hre.ethers.getSigners();
  console.log('Deploying contracts with account:', deployer.address);
  console.log('Account balance:', (await hre.ethers.provider.getBalance(deployer.address)).toString(), '\n');

  // Deploy PDS Contract
  console.log(' Deploying PDSContract...');
  const PDSContract = await hre.ethers.getContractFactory('PDSContract');
  const pdsContract = await PDSContract.deploy();
  await pdsContract.waitForDeployment();
  const pdsAddress = await pdsContract.getAddress();
  console.log(' PDSContract deployed to:', pdsAddress);

  // Deploy Parametric Insurance Contract
  console.log('\n Deploying ParametricInsurance...');
  const ParametricInsurance = await hre.ethers.getContractFactory('ParametricInsurance');
  const insuranceContract = await ParametricInsurance.deploy();
  await insuranceContract.waitForDeployment();
  const insuranceAddress = await insuranceContract.getAddress();
  console.log(' ParametricInsurance deployed to:', insuranceAddress);

  // Save deployment info
  const deploymentInfo = {
    network: hre.network.name,
    deployer: deployer.address,
    timestamp: new Date().toISOString(),
    contracts: {
      PDSContract: pdsAddress,
      ParametricInsurance: insuranceAddress,
    },
  };

  console.log('\n Deployment Summary:');
  console.log(JSON.stringify(deploymentInfo, null, 2));

  console.log('\n All contracts deployed successfully!');
  console.log('\n Integration URLs:');
  console.log(   PDS Contract: );
  console.log(   Insurance Contract: );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
