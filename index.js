const express=require('express');
const app = express();
const PORT = 4000;

require('./Routes/router')(app)
require('./config/express')(app)


app.listen(PORT, (err)=>{
    if(err){
        console.log('Error:', err);
        return;
    }

    console.log(`Server is listening on port ${PORT}`);
})