async function addToken() {
    try {
        const wasAdded = await ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: '0xYOUR_CONTRACT_ADDRESS',
                    symbol: 'SHIBNB',
                    decimals: 18,
                    image: 'images/token-logo.png',
                },
            },
        });
        if (wasAdded) {
            alert('SHIBNB added to MetaMask!');
        }
    } catch (error) {
        console.error(error);
    }
}
