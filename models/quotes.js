const { v4 } = require('uuid');
const fs=require('fs')
const path=require('path')
const pathFile=path.join(__dirname,'/quotes.json');
class Quotes {
    constructor(text,author){
        this.id= v4();
        this.text=text
        this.author= author
    }

    save(){

        const newQuote ={
            id:this.id,
            text:this.text,
            author:this.author,
        }

        fs.readFile(pathFile,(err,dbData)=>{
            if(err){
                console.log(err);
                return;
            }
            const quotes=JSON.parse(dbData)
           
            quotes.push(newQuote);

            fs.writeFile(pathFile,JSON.stringify(quotes), err=>{
                if(err){
                    console.log(err);
                }
                console.log('New quote is successfuly stored');
            })
        })
      
    }
}

module.exports=Quotes