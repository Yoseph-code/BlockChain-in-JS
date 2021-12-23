const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Your private key goes here
const myKey = ec.keyFromPrivate('d5d3d5706ed9d1482f5faacda60a98357dc1a1d175ece5fc95861c9b208bc237');

// From that we can calculate your public key (which doubles as your wallet address)
const myWalletAddress = myKey.getPublic('hex');

// Create new instance of Blockchain class
const yoCoin = new Blockchain();

// Mine first block
yoCoin.minePendingTransactions(myWalletAddress);

// Create a transaction & sign it with your key
const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.signTransaction(myKey);
yoCoin.addTransaction(tx1);

// Mine block
yoCoin.minePendingTransactions(myWalletAddress);

// Create second transaction
const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.signTransaction(myKey);
yoCoin.addTransaction(tx2);

// Mine block
yoCoin.minePendingTransactions(myWalletAddress);

console.log(`Balance of xavier is ${yoCoin.getBalanceOfAddress(myWalletAddress)}`);

// Uncomment this line if you want to test tampering with the chain
// yoCoin.chain[1].transactions[0].amount = 10;

// Check if the chain is valid
console.log('Blockchain valid?', yoCoin.isChainValid() ? 'Yes' : 'No');


// const { BlockChain, Transactions } = require('./blockchain')
// const EC = require('elliptic').ec
// const ec = new EC('secp256k1')

// const myKey = ec.keyFromPrivate('d5d3d5706ed9d1482f5faacda60a98357dc1a1d175ece5fc95861c9b208bc237')
// const myWalletAddress = myKey.getPublic('hex')

// // Create new instance of Blockchain class
// const yoCoin = new BlockChain();

// // Mine first block
// yoCoin.minePendingTransactions(myWalletAddress);

// // Create a transaction & sign it with your key
// const tx1 = new Transactions(myWalletAddress, 'address2', 100);
// tx1.signTransactions(myKey);
// yoCoin.addTransactions(tx1);

// // Mine block
// yoCoin.minePendingTransactions(myWalletAddress);

// // Create second transaction
// const tx2 = new Transactions(myWalletAddress, 'address1', 50);
// tx2.signTransactions(myKey);
// yoCoin.addTransactions(tx2);

// // Mine block
// yoCoin.minePendingTransactions(myWalletAddress);

// console.log();
// console.log(`Balance of xavier is ${yoCoin.getBalanceOfAddress(myWalletAddress)}`);

// Uncomment this line if you want to test tampering with the chain
// yoCoin.chain[1].transactions[0].amount = 10;

// Check if the chain is valid
// console.log();
// console.log('Blockchain valid?', yoCoin.isChainValid() ? 'Yes' : 'No');

// yoCoin.createTransactions(new Transactions('address1', 'address2', 100))
// yoCoin.createTransactions(new Transactions('address1', 'address2', 50))

// console.log('\n Starting the miner')
// yoCoin.minePendingTransactions(myWalletAddress)


// console.log(`the ballance of my wallet is: ${yoCoin.getBalanceOfAddress(myWalletAddress)}`)

// console.log('Is valid the block', yoCoin.isValidChain() ? 'Yes' : 'No')

// console.log('\n Starting the miner')
// yoCoin.minePendingTransactions('testing-address')

// console.log('\n the balance from testing-address if: ', yoCoin.getBalanceOfAddress('testing-address'))

// console.log('mining block 1')
// yoCoin.addBlock(new Block(1, "10/07/2021", { amount: 4 }))
// console.log('mining block 2')
// yoCoin.addBlock(new Block(2, "11/07/2021", { amount: 8 }))

// console.log(JSON.stringify(yoCoin, null, 2))

// console.log("is valid the block?", yoCoin.isValidChain())

// yoCoin.chain[1].transactions = { amount: 1000 }
// yoCoin.chain[1].hash = yoCoin.chain[1].calculateHash()

// console.log("is valid the block?", yoCoin.isValidChain())
