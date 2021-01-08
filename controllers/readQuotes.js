const fs=require('fs')
const path=require('path');

const readQuotes=()=>{
const pathFile=path.join(__dirname,'..','/models/quotes.json');
    
   const quotes= fs.readFileSync(pathFile)
       return JSON.parse(quotes)
      
}
module.exports={
    readQuotes
}