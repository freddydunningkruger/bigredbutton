const contractAddress = '0xc4e0e75bEcFB3193916Dddc0Dee3970653F3f79B'; // Add the deployed contract address

let web3;
let contractInstance;
let userAccount;
let contractABI;

async function loadContractABI() {
    const response = await fetch('./EthTimerABI.json');
    const abiJson = await response.json();
    contractABI = abiJson;
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadContractABI();

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
