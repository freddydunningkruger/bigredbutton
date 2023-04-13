const Web3 = require('web3');
const contractABI = []; // Add the ABI from the compiled contract
const contractAddress = ''; // Add the deployed contract address

const web3 = new Web3(Web3.givenProvider);
const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

document.addEventListener('DOMContentLoaded', async () => {
    const accounts = await web3.eth.getAccounts();
    const pushButton = document.getElementById('pushButton');
    const counter = document.getElementById('counter');
    const timer = document.getElementById('timer');

    pushButton.addEventListener('click', async () => {
        await contractInstance.methods.extendTimer().send({ from: accounts[0], value: web3.utils.toWei('0.01', 'ether') });
    });

    setInterval(async () => {
        const contractBalance = await web3.eth.getBalance(contractAddress);
        counter.innerText = `Contract Balance: ${web3.utils.fromWei(contractBalance, 'ether')} ETH`;

        const remainingTime = await contractInstance.methods.getRemainingTime().call();
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        timer.innerText = `Countdown: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
});
