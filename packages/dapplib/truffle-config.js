require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remind assault hunt nation flock settle'; 
let testAccounts = [
"0x46d4aa880817a6a71851df9ab1871277c149bfab5753640745c9dea00925baf2",
"0x76a8e33e69a9cbe6276ec5be0553fbbe755b249f77ad8f013c72ea10ee0457dd",
"0xf9dfedb4d5a20b777cf6a4872408b3be4f3aa53092d84c403c62c9dfc3425429",
"0x553ea36e0a26104942c9c76a87a41afd882607bd9d43b5a8bd3f4dfad4b019e5",
"0x3e92422a0238f1de1ccc4b3388fd351fc777b0c20a687b1bb516c4b5c1a74e4e",
"0xb4b27365f3bcfeb65847aa257d8d7345837fd9bca155b61c96dd2b5dd276cb47",
"0x0c415e5a6da58f61c11772061976b8672d622808991f9f7a8ff84c0a4bae48d4",
"0xf69a6064ea4f879f3f63bb58ccd024b375ba527dd6d57bfec66ccbcf6159d73e",
"0xb40cf527e1a0f2ae06104b796d84d97f187afc69530fbea01d128e303d4236c8",
"0x770af132407929848ac3c7b5e482be8bd073aa418cff8d0bf0f03fd224754241"
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
            version: '^0.8.0'
        }
    }
};

