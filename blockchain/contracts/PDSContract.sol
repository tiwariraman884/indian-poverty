// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

/**
 * @title PDSContract
 * @dev Smart contract for Public Distribution System on Vishvasya blockchain
 * @notice This contract manages grain distribution with zero-leakage tracking
 */
contract PDSContract is AccessControl, ReentrancyGuard {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant FPS_ROLE = keccak256("FPS_ROLE");
    bytes32 public constant AUDITOR_ROLE = keccak256("AUDITOR_ROLE");

    struct GrainAsset {
        string assetId;
        string commodityType;
        uint256 quantity;
        string origin;
        address currentHolder;
        uint256 timestamp;
        bool isDistributed;
    }

    struct Distribution {
        string distributionId;
        string fpsId;
        string aadhaarHash;
        string commodityType;
        uint256 quantity;
        uint256 timestamp;
        address distributor;
        bool isVerified;
    }

    // Mappings
    mapping(string => GrainAsset) public grainAssets;
    mapping(string => Distribution) public distributions;
    mapping(string => string[]) public fpsInventory;
    mapping(string => uint256) public beneficiaryAllocations;

    // Events
    event AssetCreated(string indexed assetId, string commodityType, uint256 quantity, string origin);
    event AssetTransferred(string indexed assetId, address from, address to);
    event GrainDistributed(string indexed distributionId, string fpsId, string aadhaarHash, uint256 quantity);
    event DistributionVerified(string indexed distributionId, address verifier);

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
    }

    /**
     * @dev Create new grain asset in the supply chain
     */
    function createAsset(
        string memory _assetId,
        string memory _commodityType,
        uint256 _quantity,
        string memory _origin
    ) external onlyRole(ADMIN_ROLE) {
        require(bytes(grainAssets[_assetId].assetId).length == 0, "Asset already exists");

        grainAssets[_assetId] = GrainAsset({
            assetId: _assetId,
            commodityType: _commodityType,
            quantity: _quantity,
            origin: _origin,
            currentHolder: msg.sender,
            timestamp: block.timestamp,
            isDistributed: false
        });

        emit AssetCreated(_assetId, _commodityType, _quantity, _origin);
    }

    /**
     * @dev Transfer asset to FPS dealer
     */
    function transferAsset(
        string memory _assetId,
        address _newHolder,
        string memory _fpsId
    ) external onlyRole(ADMIN_ROLE) {
        require(bytes(grainAssets[_assetId].assetId).length > 0, "Asset does not exist");
        require(!grainAssets[_assetId].isDistributed, "Asset already distributed");

        address previousHolder = grainAssets[_assetId].currentHolder;
        grainAssets[_assetId].currentHolder = _newHolder;
        
        fpsInventory[_fpsId].push(_assetId);

        emit AssetTransferred(_assetId, previousHolder, _newHolder);
    }

    /**
     * @dev Distribute grain to beneficiary
     */
    function distributeGrain(
        string memory _distributionId,
        string memory _fpsId,
        string memory _aadhaarHash,
        string memory _assetId,
        uint256 _quantity
    ) external onlyRole(FPS_ROLE) nonReentrant {
        require(bytes(grainAssets[_assetId].assetId).length > 0, "Asset does not exist");
        require(grainAssets[_assetId].quantity >= _quantity, "Insufficient quantity");
        require(!distributions[_distributionId].isVerified, "Already distributed");

        // Update asset quantity
        grainAssets[_assetId].quantity -= _quantity;
        if (grainAssets[_assetId].quantity == 0) {
            grainAssets[_assetId].isDistributed = true;
        }

        // Record distribution
        distributions[_distributionId] = Distribution({
            distributionId: _distributionId,
            fpsId: _fpsId,
            aadhaarHash: _aadhaarHash,
            commodityType: grainAssets[_assetId].commodityType,
            quantity: _quantity,
            timestamp: block.timestamp,
            distributor: msg.sender,
            isVerified: true
        });

        // Update beneficiary allocation
        beneficiaryAllocations[_aadhaarHash] += _quantity;

        emit GrainDistributed(_distributionId, _fpsId, _aadhaarHash, _quantity);
    }

    /**
     * @dev Get asset traceability information
     */
    function traceAsset(string memory _assetId) 
        external 
        view 
        returns (
            string memory commodityType,
            uint256 quantity,
            string memory origin,
            address currentHolder,
            bool isDistributed
        ) 
    {
        GrainAsset memory asset = grainAssets[_assetId];
        return (
            asset.commodityType,
            asset.quantity,
            asset.origin,
            asset.currentHolder,
            asset.isDistributed
        );
    }

    /**
     * @dev Get distribution details
     */
    function getDistribution(string memory _distributionId)
        external
        view
        returns (Distribution memory)
    {
        return distributions[_distributionId];
    }

    /**
     * @dev Get FPS inventory
     */
    function getFPSInventory(string memory _fpsId)
        external
        view
        returns (string[] memory)
    {
        return fpsInventory[_fpsId];
    }

    /**
     * @dev Add FPS dealer role
     */
    function addFPSDealer(address _dealer) external onlyRole(ADMIN_ROLE) {
        grantRole(FPS_ROLE, _dealer);
    }

    /**
     * @dev Add auditor role
     */
    function addAuditor(address _auditor) external onlyRole(ADMIN_ROLE) {
        grantRole(AUDITOR_ROLE, _auditor);
    }
}
