const express=require('express');
const app = express();
const PORT = 4000;
const routes= require('./Routes/router')

require('./config/express')(app)
app.use('/', routes)
app.listen(PORT, (err)=>{
    if(err){
        console.log('Error:', err);
        return;
    }

    console.log(`Server is listening on port ${PORT}`);
})