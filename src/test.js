import CryptoBlock from './CryptoBlock.js';
import CryptoBlockchain from './CryptoBlockChain.js';
let moonRocket = new CryptoBlockchain();
let date = new Date();
moonRocket.addNewBlock(
  new CryptoBlock(1, date.getDate(), {
    sender: 'Cosm Ksi',
    recipient: 'Kal Mielke',
    quantity: 150,
  })
);
moonRocket.addNewBlock(
  new CryptoBlock(2, date.getDate(), {
    sender: 'Italy Friedman',
    recipient: 'Ricardo Lopez',
    quantity: 1200,
  })
);
console.log(JSON.stringify(moonRocket, null, 4));
