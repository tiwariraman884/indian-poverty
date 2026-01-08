// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

/**
 * @title ParametricInsurance
 * @dev Automatic insurance payouts based on climate triggers
 * @notice Integrates with Bharat Forecast System (BFS) and C-FLOOD
 */
contract ParametricInsurance is AccessControl, ReentrancyGuard {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant ORACLE_ROLE = keccak256("ORACLE_ROLE");
    bytes32 public constant VERIFIER_ROLE = keccak256("VERIFIER_ROLE");

    enum TriggerType {
        HEAT_WAVE,
        FLOOD,
        DROUGHT,
        CYCLONE,
        CROP_FAILURE
    }

    struct Policy {
        string policyId;
        string geoCode;
        address beneficiary;
        TriggerType triggerType;
        uint256 triggerValue;
        uint256 payoutAmount;
        bool isActive;
        uint256 createdAt;
    }

    struct Claim {
        string claimId;
        string policyId;
        TriggerType triggerType;
        uint256 actualValue;
        uint256 payoutAmount;
        uint256 timestamp;
        bool isPaid;
        address verifier;
    }

    // Mappings
    mapping(string => Policy) public policies;
    mapping(string => Claim) public claims;
    mapping(string => string[]) public geoPolicies;
    mapping(address => uint256) public beneficiaryPayouts;

    // Events
    event PolicyCreated(string indexed policyId, string geoCode, address beneficiary, uint256 payoutAmount);
    event TriggerActivated(string indexed policyId, TriggerType triggerType, uint256 actualValue);
    event PayoutExecuted(string indexed claimId, address beneficiary, uint256 amount);
    event PolicyDeactivated(string indexed policyId);

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
    }

    /**
     * @dev Create new parametric insurance policy
     */
    function createPolicy(
        string memory _policyId,
        string memory _geoCode,
        address _beneficiary,
        TriggerType _triggerType,
        uint256 _triggerValue,
        uint256 _payoutAmount
    ) external onlyRole(ADMIN_ROLE) {
        require(bytes(policies[_policyId].policyId).length == 0, "Policy already exists");
        require(_beneficiary != address(0), "Invalid beneficiary");

        policies[_policyId] = Policy({
            policyId: _policyId,
            geoCode: _geoCode,
            beneficiary: _beneficiary,
            triggerType: _triggerType,
            triggerValue: _triggerValue,
            payoutAmount: _payoutAmount,
            isActive: true,
            createdAt: block.timestamp
        });

        geoPolicies[_geoCode].push(_policyId);

        emit PolicyCreated(_policyId, _geoCode, _beneficiary, _payoutAmount);
    }

    /**
     * @dev Trigger automatic payout based on climate data
     */
    function triggerPayout(
        string memory _claimId,
        string memory _policyId,
        uint256 _actualValue
    ) external onlyRole(ORACLE_ROLE) nonReentrant {
        Policy storage policy = policies[_policyId];
        require(policy.isActive, "Policy not active");
        require(bytes(claims[_claimId].claimId).length == 0, "Claim already exists");

        bool shouldPayout = false;

        // Check if trigger condition is met
        if (policy.triggerType == TriggerType.HEAT_WAVE && _actualValue >= policy.triggerValue) {
            shouldPayout = true;
        } else if (policy.triggerType == TriggerType.FLOOD && _actualValue >= policy.triggerValue) {
            shouldPayout = true;
        } else if (policy.triggerType == TriggerType.DROUGHT && _actualValue >= policy.triggerValue) {
            shouldPayout = true;
        }

        if (shouldPayout) {
            claims[_claimId] = Claim({
                claimId: _claimId,
                policyId: _policyId,
                triggerType: policy.triggerType,
                actualValue: _actualValue,
                payoutAmount: policy.payoutAmount,
                timestamp: block.timestamp,
                isPaid: true,
                verifier: msg.sender
            });

            beneficiaryPayouts[policy.beneficiary] += policy.payoutAmount;

            emit TriggerActivated(_policyId, policy.triggerType, _actualValue);
            emit PayoutExecuted(_claimId, policy.beneficiary, policy.payoutAmount);
        }
    }

    /**
     * @dev Batch trigger payouts for multiple beneficiaries in a geo area
     */
    function batchTriggerPayout(
        string memory _geoCode,
        TriggerType _triggerType,
        uint256 _actualValue,
        string[] memory _claimIds
    ) external onlyRole(ORACLE_ROLE) nonReentrant {
        string[] memory policyIds = geoPolicies[_geoCode];
        uint256 claimIndex = 0;

        for (uint256 i = 0; i < policyIds.length; i++) {
            Policy storage policy = policies[policyIds[i]];
            
            if (policy.isActive && policy.triggerType == _triggerType) {
                if (_actualValue >= policy.triggerValue) {
                    string memory claimId = _claimIds[claimIndex];
                    
                    claims[claimId] = Claim({
                        claimId: claimId,
                        policyId: policy.policyId,
                        triggerType: _triggerType,
                        actualValue: _actualValue,
                        payoutAmount: policy.payoutAmount,
                        timestamp: block.timestamp,
                        isPaid: true,
                        verifier: msg.sender
                    });

                    beneficiaryPayouts[policy.beneficiary] += policy.payoutAmount;

                    emit PayoutExecuted(claimId, policy.beneficiary, policy.payoutAmount);
                    
                    claimIndex++;
                }
            }
        }
    }

    /**
     * @dev Get policy details
     */
    function getPolicy(string memory _policyId)
        external
        view
        returns (Policy memory)
    {
        return policies[_policyId];
    }

    /**
     * @dev Get claim details
     */
    function getClaim(string memory _claimId)
        external
        view
        returns (Claim memory)
    {
        return claims[_claimId];
    }

    /**
     * @dev Get all policies for a geographic area
     */
    function getPoliciesByGeo(string memory _geoCode)
        external
        view
        returns (string[] memory)
    {
        return geoPolicies[_geoCode];
    }

    /**
     * @dev Deactivate policy
     */
    function deactivatePolicy(string memory _policyId) external onlyRole(ADMIN_ROLE) {
        policies[_policyId].isActive = false;
        emit PolicyDeactivated(_policyId);
    }

    /**
     * @dev Add oracle (climate data provider)
     */
    function addOracle(address _oracle) external onlyRole(ADMIN_ROLE) {
        grantRole(ORACLE_ROLE, _oracle);
    }

    /**
     * @dev Add verifier
     */
    function addVerifier(address _verifier) external onlyRole(ADMIN_ROLE) {
        grantRole(VERIFIER_ROLE, _verifier);
    }

    /**
     * @dev Get beneficiary total payouts
     */
    function getBeneficiaryPayouts(address _beneficiary)
        external
        view
        returns (uint256)
    {
        return beneficiaryPayouts[_beneficiary];
    }
}
