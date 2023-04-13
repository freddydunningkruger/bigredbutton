const contractAddress = '0xc4e0e75bEcFB3193916Dddc0Dee3970653F3f79B'; // Add the deployed contract address

let web3;
let contractInstance;
let userAccount;

const contractABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newEndTime",
        "type": "uint256"
      }
    ],
    "name": "TimerExtended",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "endTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "lastUser",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "extendTimer",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [],
    "name": "getRemainingTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
];

document.addEventListener('DOMContentLoaded', async () => {
    const connectWallet = document.getElementById('connectWallet');
    const pushButton = document.getElementById('pushButton');
    const counter = document.getElementById('counter');
    const timer = document.getElementById('timer');

    connectWallet.addEventListener('click', async () => {
        // ...
    });

    pushButton.addEventListener('click', async () => {
        // ...
    });

    setInterval(async () => {
        // ...
    }, 1000);
});
