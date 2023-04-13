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
        if (window.ethereum) {
            web3 = new Web3(window.ethereum);
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const accounts = await web3.eth.getAccounts();
                userAccount = accounts[0];
                contractInstance = new web3.eth.Contract(contractABI, contractAddress);
                console.log("Wallet connected:", userAccount);
            } catch (err) {
                console.error('User denied account access', err);
            }
        } else {
            console.error('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
    });

    pushButton.addEventListener('click', async () => {
        if (!contractInstance) {
            alert('Please connect your wallet first');
            return;
        }
        await contractInstance.methods.extendTimer().send({ from: userAccount, value: web3.utils.toWei('0.01', 'ether') });
    });

    setInterval(async () => {
        if (!contractInstance) return;

        const contractBalance = await web3.eth.getBalance(contractAddress);
        counter.innerText = `Contract Balance: ${web3.utils.fromWei(contractBalance, 'ether')} ETH`;

        const remainingTime = await contractInstance.methods.getRemainingTime().call();
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        timer.innerText = `Countdown: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
});
