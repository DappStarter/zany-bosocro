require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food cheap rifle rural hour hundred light army ghost'; 
let testAccounts = [
"0x130d686a9428a2b663c441c2068a4ef728da11eac1e91987955c1206b7cdde8a",
"0xe9260f4f3e9c45ef643e211ea995fa567e7f37a8bb408970b2cd4cbbbfead774",
"0x044a9ddc3df4abb73243226d26c21d30050b4b7fac445fe8f9f2cb65e373dde5",
"0x9465c405b98a9619a7294fb2db05cdb70931a72d58ac842d6941f8ba531d9b68",
"0x9709753ca190d81d4cdbb7243558543ec23f0d11bedba06aaa49e5c296bf5977",
"0x3db9aaefe8addf9dfd4224dd486d576ddad9296b6c5360f412028f7b40f57254",
"0x664234c50a9ac5e1f6b0f78c2c1cf1fff2a9aead6f2e84b5cddb07c4271606d4",
"0x1d7eec1155369b18379ee191c52ecd2949509c231a325169e10500dbdf372418",
"0x98fe82a4fcf15e58e2eddea469b87d9e3cc230d2cbd5aace0a08a90c86ad3bfe",
"0x8f5add4fdf75bafdeb5fc32f306cb2dd0f1634a4d0fcffc59006dd8de5796a8d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
