Challenge

The challenge -

1. Layer 1 solution (ERC20 functions)
2. Layer 2 (ZKRollup functions)


Implementation

SIM1 and SIM tokens issued - https://github.com/zillerium/openzeppelin-solidity/blob/master/contracts/examples/SimpleToken.sol

UI - https://github.com/zillerium/openzeppelin-solidity/tree/master/user

ERC20 functions all implemented and tested (quelm.co)

Contract

https://rinkeby.etherscan.io/address/0x7a56864d2d489fa0ea807884c0df893314c1deb2

Layer 2

Zokrates and Circom installed. Zokrates functions run but verifier failed due to gas limits -

https://github.com/Zokrates/ZoKrates/issues/337

Hence setup worked, generate-witness, proof, and export-verifier.

Example verifier - https://github.com/zillerium/openzeppelin-solidity/blob/master/circom/verifier.sol

The design we used was - https://github.com/barryWhiteHat/roll_up

And then the design was to use mpc.


