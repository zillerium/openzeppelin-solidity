pragma solidity 0.4.24;

import "github.com/openzeppelin-solidity/contracts/crowdsale/ZKR1Token.sol";
import "github.com/openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "github.com/openzeppelin-solidity/contracts/token/ERC20/PausableToken.sol";
import "github.com/openzeppelin-solidity/contracts/crowdsale/Crowdsale.sol";
import "github.com/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "github.com/openzeppelin-solidity/contracts/crowdsale/validation/WhitelistedCrowdsale.sol";
import "github.com/openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol";
import "github.com/openzeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol";


contract ZKR1Crowdsale is  CappedCrowdsale {

    uint8 public constant decimals = 18;
    uint256 public constant TOTAL_SUPPLY = uint256(10000000000) * (uint256(10) ** decimals);  // 10,000,000,000

 /**
  * @param _rate Number of token units a buyer gets per wei
  * @param _wallet Address where collected funds will be forwarded to
  */
    constructor(uint256 _rate, address _wallet,  ZKR1Token _token) public
        CappedCrowdsale(TOTAL_SUPPLY)
        Crowdsale(_rate, _wallet, _token)
        require(_rate > 0);
        require(_wallet != address(0));

        setupInitialSupply();
    }

    // Sets up the initial balances
    // This must be called after ownership of the token is transferred to the crowdsale
    function setupInitialState() external onlyOwner {
        setupInitialSupply();
    }

    /**
 * @dev Returns the rate of tokens per wei at the present time.
 * @return The number of tokens a buyer gets per wei at a given time
 */
    function getCurrentRate() public view returns (uint256) {
        return 100;
    }

    /**
     * @dev Overrides parent method taking into account variable rate.
     * @param _weiAmount The value in wei to be converted into tokens
     * @return The number of tokens _weiAmount wei will buy at present time
     */
    function _getTokenAmount(uint256 _weiAmount) internal view returns (uint256) {
        uint256 currentRate = getCurrentRate();
        return currentRate.mul(_weiAmount);
    }

}
