web3x = new Web3(web3.currentProvider);

    web3x.eth.defaultAccount = web3x.eth.accounts[0];
    var ERC20Contract = web3x.eth.contract([ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "DECIMALS", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "INITIAL_SUPPLY", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "addedValue", "type": "uint256" } ], "name": "increaseAllowance", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "subtractedValue", "type": "uint256" } ], "name": "decreaseAllowance", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "to", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "owner", "type": "address" }, { "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" } ]);
    var sim1ERC20Contract = ERC20Contract.at('0x7a56864d2d489fa0ea807884c0df893314c1deb2');

function getBalance() {
    var walletaddress = document.getElementById("walletaddress").value;
    sim1ERC20Contract.balanceOf(walletaddress, function(error, result){
    if(!error) {
      document.getElementById("walletaddressbalance").innerHTML = 'Balance ' + result.toNumber();
      console.log(result);
    } else
      console.log(error);
    });
}

function getTotalSupply() {
    sim1ERC20Contract.totalSupply( function(error, result){
    if(!error) {
      document.getElementById("totalsupply").innerHTML = 'Supply ' + result;
      console.log(result);
    } else
      console.log(error);
    });
}

function transfer() {
    var numbertokens = document.getElementById("numbertokens").value;
    var receivingwalletaddress = document.getElementById("receivingwalletaddress").value;

    sim1ERC20Contract.transfer( receivingwalletaddress, numbertokens, function(error, result){
    if(!error) {
      console.log(result);
    } else
      console.log(error);
    });
}

function transferFrom() {
    var numbertokensFrom = document.getElementById("numbertokensFrom").value;
    var sendingwalletaddressFrom = document.getElementById("sendingwalletaddressFrom").value;
    var receivingwalletaddressFrom = document.getElementById("receivingwalletaddressFrom").value;

    sim1ERC20Contract.transferFrom( sendingwalletaddressFrom,receivingwalletaddressFrom , numbertokensFrom, function(error, result){
    if(!error) {
      document.getElementById("totalsupply").innerHTML = 'Supply ' + result;
      console.log(result);
    } else
      console.log(error);
    });
}

function approve() {
    var numbertokensApprove = document.getElementById("numbertokensApprove").value;
    var spendingwalletaddress = document.getElementById("spendingwalletaddress").value;

    sim1ERC20Contract.approve( spendingwalletaddress,
           numbertokensApprove, function(error, result){
    if(!error) {
      console.log(result);
    } else
      console.log(error);
    });
}

function allowance() {
    var ownerwalletaddressAllowance = document.getElementById("ownerwalletaddressAllowance").value;
    var spendingwalletaddressAllowance = document.getElementById("spendingwalletaddressAllowance").value;

    sim1ERC20Contract.allowance( ownerwalletaddressAllowance,
             spendingwalletaddressAllowance, function(error, result){
    if(!error) {
      document.getElementById("allowance").innerHTML = 'Allowance ' + result;
      console.log(result);
    } else
      console.log(error);
    });
}
