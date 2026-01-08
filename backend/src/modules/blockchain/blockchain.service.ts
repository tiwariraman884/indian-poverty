import { Injectable, Logger } from '@nestjs/common';
import { ethers } from 'ethers';

@Injectable()
export class BlockchainService {
  private provider: ethers.JsonRpcProvider;
  private wallet: ethers.Wallet;
  private pdsContract: ethers.Contract;
  private insuranceContract: ethers.Contract;
  private readonly logger = new Logger(BlockchainService.name);

  constructor() {
    // Initialize provider
    const rpcUrl = process.env.BLOCKCHAIN_NODE_URL || 'http://localhost:8545';
    try {
      this.provider = new ethers.JsonRpcProvider(rpcUrl);
    } catch (error) {
      this.logger.warn(`Failed to initialize provider: ${error.message}`);
    }

    // Initialize wallet (if private key is provided and valid)
    const privateKey = process.env.BLOCKCHAIN_PRIVATE_KEY;
    if (privateKey && privateKey !== 'your-private-key' && privateKey.startsWith('0x') && privateKey.length === 66) {
      try {
        this.wallet = new ethers.Wallet(privateKey, this.provider);
        this.logger.log('Blockchain wallet initialized successfully');
      } catch (error) {
        this.logger.warn('Invalid blockchain private key, wallet not initialized');
      }
    }

    // Contract ABIs (simplified for now)
    const pdsAbi = [
      'function createAsset(string _assetId, string _commodityType, uint256 _quantity, string _origin)',
      'function distributeGrain(string _distributionId, string _fpsId, string _aadhaarHash, string _assetId, uint256 _quantity)',
      'function traceAsset(string _assetId) view returns (string, uint256, string, address, bool)',
      'function getDistribution(string _distributionId) view returns (tuple(string distributionId, string fpsId, string aadhaarHash, string commodityType, uint256 quantity, uint256 timestamp, address distributor, bool isVerified))',
    ];

    const insuranceAbi = [
      'function createPolicy(string _policyId, string _geoCode, address _beneficiary, uint8 _triggerType, uint256 _triggerValue, uint256 _payoutAmount)',
      'function triggerPayout(string _claimId, string _policyId, uint256 _actualValue)',
      'function batchTriggerPayout(string _geoCode, uint8 _triggerType, uint256 _actualValue, string[] _claimIds)',
      'function getPolicy(string _policyId) view returns (tuple(string policyId, string geoCode, address beneficiary, uint8 triggerType, uint256 triggerValue, uint256 payoutAmount, bool isActive, uint256 createdAt))',
    ];

    // Initialize contracts (addresses from deployment)
    const pdsAddress = process.env.PDS_CONTRACT_ADDRESS;
    const insuranceAddress = process.env.INSURANCE_CONTRACT_ADDRESS;

    if (this.wallet && pdsAddress) {
      try {
        this.pdsContract = new ethers.Contract(pdsAddress, pdsAbi, this.wallet);
        this.logger.log('PDS Contract initialized');
      } catch (error) {
        this.logger.warn(`Failed to initialize PDS Contract: ${error.message}`);
      }
    }

    if (this.wallet && insuranceAddress) {
      try {
        this.insuranceContract = new ethers.Contract(insuranceAddress, insuranceAbi, this.wallet);
        this.logger.log('Insurance Contract initialized');
      } catch (error) {
        this.logger.warn(`Failed to initialize Insurance Contract: ${error.message}`);
      }
    }
  }

  async createGrainAsset(assetId: string, commodityType: string, quantity: number, origin: string) {
    if (!this.pdsContract) {
      throw new Error('PDS Contract not initialized');
    }

    const tx = await this.pdsContract.createAsset(assetId, commodityType, quantity, origin);
    const receipt = await tx.wait();

    return {
      success: true,
      txHash: receipt.hash,
      assetId,
    };
  }

  async distributeGrain(distributionId: string, fpsId: string, aadhaarHash: string, assetId: string, quantity: number) {
    if (!this.pdsContract) {
      throw new Error('PDS Contract not initialized');
    }

    const tx = await this.pdsContract.distributeGrain(distributionId, fpsId, aadhaarHash, assetId, quantity);
    const receipt = await tx.wait();

    return {
      success: true,
      txHash: receipt.hash,
      distributionId,
    };
  }

  async traceGrainAsset(assetId: string) {
    if (!this.pdsContract) {
      throw new Error('PDS Contract not initialized');
    }

    const [commodityType, quantity, origin, currentHolder, isDistributed] = await this.pdsContract.traceAsset(assetId);

    return {
      assetId,
      commodityType,
      quantity: quantity.toString(),
      origin,
      currentHolder,
      isDistributed,
    };
  }

  async createInsurancePolicy(policyId: string, geoCode: string, beneficiary: string, triggerType: number, triggerValue: number, payoutAmount: number) {
    if (!this.insuranceContract) {
      throw new Error('Insurance Contract not initialized');
    }

    const tx = await this.insuranceContract.createPolicy(
      policyId,
      geoCode,
      beneficiary,
      triggerType,
      triggerValue,
      payoutAmount,
    );
    const receipt = await tx.wait();

    return {
      success: true,
      txHash: receipt.hash,
      policyId,
    };
  }

  async triggerInsurancePayout(claimId: string, policyId: string, actualValue: number) {
    if (!this.insuranceContract) {
      throw new Error('Insurance Contract not initialized');
    }

    const tx = await this.insuranceContract.triggerPayout(claimId, policyId, actualValue);
    const receipt = await tx.wait();

    return {
      success: true,
      txHash: receipt.hash,
      claimId,
    };
  }

  async batchTriggerPayout(geoCode: string, triggerType: number, actualValue: number, claimIds: string[]) {
    if (!this.insuranceContract) {
      throw new Error('Insurance Contract not initialized');
    }

    const tx = await this.insuranceContract.batchTriggerPayout(geoCode, triggerType, actualValue, claimIds);
    const receipt = await tx.wait();

    return {
      success: true,
      txHash: receipt.hash,
      beneficiariesCount: claimIds.length,
    };
  }

  async getBlockchainInfo() {
    try {
      const network = await this.provider.getNetwork();
      const blockNumber = await this.provider.getBlockNumber();

      return {
        network: network.name,
        chainId: network.chainId?.toString(),
        blockNumber,
        pdsContractAddress: process.env.PDS_CONTRACT_ADDRESS,
        insuranceContractAddress: process.env.INSURANCE_CONTRACT_ADDRESS,
        initialized: !!(this.pdsContract || this.insuranceContract),
      };
    } catch (error) {
      this.logger.error(`Failed to get blockchain info: ${error.message}`);
      return {
        network: 'unknown',
        chainId: 'unknown',
        blockNumber: 0,
        pdsContractAddress: process.env.PDS_CONTRACT_ADDRESS,
        insuranceContractAddress: process.env.INSURANCE_CONTRACT_ADDRESS,
        initialized: false,
        error: error.message,
      };
    }
  }
}
