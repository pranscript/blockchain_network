const Blockchain = require('./blockchain');
//"start": "nodemon  dev/networkNode.js "
const bitcoin = new Blockchain();

const bc1 =
{
    "chain": [
    {
    "index": 1,
    "timestamp": 1564914237733,
    "transactions": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1564914433885,
    "transactions": [],
    "nonce": 18140,
    "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    "previousBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1564914603497,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "transactionId": "6ce190f0b6a211e99300f5eb8b3422c1"
    },
    {
    "amount": 10,
    "sender": "djfhgefsuyfgyugvdhfv",
    "recipient": "gdfgdfgbdfgbdfgbfdgb",
    "transactionId": "c27119a0b6a211e99300f5eb8b3422c1"
    },
    {
    "amount": 20,
    "sender": "djfhgefsuyfgyugvdhfv",
    "recipient": "gdfgdfgbdfgbdfgbfdgb",
    "transactionId": "c9dd9510b6a211e99300f5eb8b3422c1"
    },
    {
    "amount": 30,
    "sender": "djfhgefsuyfgyugvdhfv",
    "recipient": "gdfgdfgbdfgbdfgbfdgb",
    "transactionId": "cd14f250b6a211e99300f5eb8b3422c1"
    }
    ],
    "nonce": 71661,
    "hash": "0000239961234fc61677badd475e1dc964d0cca539640cc3c6e43ed25c91530a",
    "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
    "index": 4,
    "timestamp": 1564914637499,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "transactionId": "d1f5b9d0b6a211e99300f5eb8b3422c1"
    },
    {
    "amount": 40,
    "sender": "djfhgefsuyfgyugvdhfv",
    "recipient": "gdfgdfgbdfgbdfgbfdgb",
    "transactionId": "dc5313a0b6a211e99300f5eb8b3422c1"
    },
    {
    "amount": 50,
    "sender": "djfhgefsuyfgyugvdhfv",
    "recipient": "gdfgdfgbdfgbdfgbfdgb",
    "transactionId": "dec28d00b6a211e99300f5eb8b3422c1"
    },
    {
    "amount": 60,
    "sender": "djfhgefsuyfgyugvdhfv",
    "recipient": "gdfgdfgbdfgbdfgbfdgb",
    "transactionId": "e0be8410b6a211e99300f5eb8b3422c1"
    },
    {
    "amount": 70,
    "sender": "djfhgefsuyfgyugvdhfv",
    "recipient": "gdfgdfgbdfgbdfgbfdgb",
    "transactionId": "e2e29c90b6a211e99300f5eb8b3422c1"
    }
    ],
    "nonce": 147407,
    "hash": "00009b9f97edd340c7877bd5d331a8f2daf581d0b940993100e4d0bf178fa6fb",
    "previousBlockHash": "0000239961234fc61677badd475e1dc964d0cca539640cc3c6e43ed25c91530a"
    },
    {
    "index": 5,
    "timestamp": 1564914647911,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "transactionId": "e639dde0b6a211e99300f5eb8b3422c1"
    }
    ],
    "nonce": 21667,
    "hash": "00004826f529e683452e5e6316452980c27b437058ad00113ab2e22db22574b0",
    "previousBlockHash": "00009b9f97edd340c7877bd5d331a8f2daf581d0b940993100e4d0bf178fa6fb"
    },
    {
    "index": 6,
    "timestamp": 1564914654045,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "transactionId": "ec6e9ca0b6a211e99300f5eb8b3422c1"
    }
    ],
    "nonce": 53335,
    "hash": "0000d8f6ef6d0c3dcf4cc664f3e03ddba06f336a5ce7041e5a1f286e56ee1547",
    "previousBlockHash": "00004826f529e683452e5e6316452980c27b437058ad00113ab2e22db22574b0"
    }
    ],
    "pendingTransactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "transactionId": "f0169600b6a211e99300f5eb8b3422c1"
    }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
    };

    console.log('Valid: ',bitcoin.chainIsValid(bc1.chain));

    
//console.log(bitcoin);

/*const previousBlockHash = 'suhfe78fysghghgjgdufuhd';
const currentBlockData = [
    {
        amount:10,
        sender: 'gewgdsgdsfgdfg',
        recipient:'sgsdgsdgdfgds'
    },
    {
        amount:10,
        sender: 'gewgdsgdsfgdfg',
        recipient:'sgsdgsdgdfgds'
    },
    {
        amount:10,
        sender: 'gewgdsgdsfgdfg',
        recipient:'sgsdgsdgdfgds'
    }
];
*/
//console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
//const nonce = 49183;
//bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);


//console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

//bitcoin.createNewBlock(2323, 'dfdf7dfg7d8f6gdfg','dfgfdf76gdgf76fgtd');

//bitcoin.createNewTransaction(100,'ALEXGY67TGUYTIGI','JENHJG76T67RRGI');

//bitcoin.createNewBlock(4564, 'KSHIU5UH3H4R3','DSFJH7875YT48H');

//console.log(bitcoin.chain[1]);