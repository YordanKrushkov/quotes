const Quotes = require('../models/quotes');

const newQuote= new Quotes ('Don\'t forget who you are', 'Yordan Krushkov');
console.log(newQuote);

newQuote.save()