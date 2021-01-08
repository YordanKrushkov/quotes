const express= require('express')
const router = express.Router();


 router.get('/',(req, res)=>{
    res.render('home')
 })
 router.get('/publush',(req, res)=>{
   res.render('publish')
})

router.get('/about',(req, res)=>{
   res.render('about')
})

module.exports = router;