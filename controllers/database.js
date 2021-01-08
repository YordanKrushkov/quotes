const fs = require('fs')
const path = require('path');
const pathFile = path.join(__dirname, '..', '/models/quotes.json');


const saveQuote = (quote) => {
    readQuotes((quotes) => {
        quotes.push(quote)
        fs.writeFile(pathFile, JSON.stringify(quotes), err => {
            if (err) {
                console.log(err);
            }
            console.log('New quote is successfuly stored');
        })

    })

}

const readQuotes = (callback) => {
    fs.readFile(pathFile, (err, dbData) => {
        if (err) {
            console.log(err);
            return;
        }
        const quotes = JSON.parse(dbData)

        callback(quotes)
    })
}
module.exports = {
    saveQuote,
    readQuotes
}