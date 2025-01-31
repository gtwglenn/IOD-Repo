console.log ("Hello World")

console.log ("Garrard Glenn")


const Sentiment = require('sentiment');
    // require sentiment 

const sentiment = new Sentiment();
    // new class (sentiment)

const result = sentiment.analyze('All dogs are amazing!');

console.log(result); 