const express= require('express')
const router = express.Router();
const {readQuotes}= require('../controllers/readQuotes')

 router.get('/',(req, res)=>{
    res.render('home',{
       title: 'Quotes | Home',
       quotes:readQuotes(),
    })
 })
 router.get('/publush',(req, res)=>{
   res.render('publish',{
      title: 'Quotes | Publish'
   })
})
router.post('/publush',(req, res)=>{
   
})

router.get('/about',(req, res)=>{
   res.render('about')
})

module.exports = router;