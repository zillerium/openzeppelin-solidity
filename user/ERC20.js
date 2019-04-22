web3 = new Web3(web3.currentProvider);

    web3.eth.defaultAccount = web3.eth.accounts[0];
    var ERC20Contract = web3.eth.contract([ { "constant": true, "inputs": [ { "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "to", "type": "address" }, { "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "to", "type": "address" }, { "name": "tokenId", "type": "uint256" } ], "name": "mint", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "to", "type": "address" }, { "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "tokenId", "type": "uint256" }, { "name": "ipfsHashImage", "type": "string" }, { "name": "ipfsHashText", "type": "string" } ], "name": "addIpfsRecord", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "tokenId", "type": "uint256" }, { "name": "_data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "tokenId", "type": "uint256" } ], "name": "getIpfsRecord", "outputs": [ { "name": "", "type": "string" }, { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "owner", "type": "address" }, { "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": true, "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "approved", "type": "address" }, { "indexed": true, "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "operator", "type": "address" }, { "indexed": false, "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" } ]);
    var sim1ERC20Contract = ERC20Contract.at('0x7a56864d2d489fa0ea807884c0df893314c1deb2');

function getBalance() {
    var walletaddress = document.getElementById("walletaddress").value;
    sim1ERC20Contract.balanceOf(walletaddress, function(error, result){
    if(!error) {
      document.getElementById("walletaddress").innerHTML = 'Balance ' + result;
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

    sim1ERC20Contract.Transfer( receivingwalletaddress, numbertokens, function(error, result){
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
