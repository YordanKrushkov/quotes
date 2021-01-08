const { v4 } = require('uuid');
const {saveQuote}= require('../controllers/database')
class Quotes {
    constructor(text,author){
        this.id= v4();
        this.text=text
        this.author= author
    }

    save(callback){

        const newQuote ={
            id:this.id,
            text:this.text,
            author:this.author,
        }

        saveQuote(newQuote, callback)
      
    }
}

module.exports=Quotes