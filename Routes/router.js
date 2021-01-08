const express= require('express')
const router = express.Router();
const {readAllQuotes}= require('../controllers/quotes')

 router.get('/',(req, res)=>{
   readAllQuotes((quotes)=>{
      res.render('home',{
         title: 'Quotes | Home',
         quotes:quotes
      })
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