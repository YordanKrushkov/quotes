const fs=require('fs')
const {readQuotes}=require('./database')

const readAllQuotes=(callback)=>{
    readQuotes((quotes)=>{
        callback(quotes)
    })
}
module.exports={
    readAllQuotes
}