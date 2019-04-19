pragma solidity ^0.5.2;

import "github.com/zillerium/openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "github.com/zillerium/openzeppelin-solidity/contracts/ownership/Ownable.sol";

// reference - https://github.com/thehuzzle/crowdsale-token/tree/master/contracts

contract ZKR1Token is StandardToken, Ownable {

    string public constant name = "ZKR1 Tokens";
    string public constant symbol = "ZKR1-20";
    uint8 public constant decimals = 18;
    uint256 public constant TOTAL_SUPPLY = uint256(1000000000) * (uint256(10) ** decimals);  // 1,000,000,000

    event Mint(address indexed to, uint256 amount);
    event MintFinished();

    constructor () public {

    }

    /**
     * @dev transfer token for a specified address
     * @param _to The address to transfer to.
     * @param _value The amount to be transferred.
    */
    function transfer(address _to, uint256 _value) public returns (bool) {
        require(_to != address(0));

        totalSupply_ = totalSupply_.add(_value);
        balances[_to] = balances[_to].add(_value);
        emit Transfer(address(0), _to, _value);
        return true;
    }

    /**
 * @dev Function to mint tokens
 * @param _to The address that will receive the minted tokens.
 * @param _amount The amount of tokens to mint.
 * @return A boolean that indicates if the operation was successful.
 */
    function mint(address _to, uint256 _amount) public returns (bool) {
        totalSupply_ = totalSupply_.add(_amount);
        balances[_to] = balances[_to].add(_amount);
        emit Transfer(address(0), _to, _amount);
        return true;
    }
}
