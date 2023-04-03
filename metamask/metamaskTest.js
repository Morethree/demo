//取得元素 通过 class 方式
const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');

//绑定 click 事件
ethereumButton.addEventListener('click', () => {
    getAccount();
});
// 现在我们使用 ethereum.request({ method: ‘eth_requestAccounts’ }); 请求当前所 metamask 所链接的地址
async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    console.log(accounts);
    showAccount.innerHTML = accounts[0];//修改 showAccount 元神的 html 为 账户内容
}

// ethereum.on 可以对当前 metamask 进行监听，传入所需要监听的事件即可
ethereum.on('accountsChanged', function (accounts) {
    showAccount.innerHTML = accounts[0];
});
