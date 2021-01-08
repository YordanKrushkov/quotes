const express = require('express');
const router = express.Router();
const { readAllQuotes } = require('../controllers/quotes');
const Quotes = require('../models/quotes');

router.get('/', (req, res) => {
   readAllQuotes((quotes) => {
      res.render('home', {
         title: 'Quotes | Home',
         quotes: quotes
      });
   });

});
router.get('/publish', (req, res) => {
   res.render('publish', {
      title: 'Quotes | Publish'
   });
});

router.post('/publish', (req, res) => {
   const {
      text,
      author
   } = req.body;
   const quote = new Quotes(text, author);
   quote.save(() => {
      res.redirect('/');
   });
});

router.get('/about', (req, res) => {
   res.render('about',{
      title: 'Quotes | About',
   });
});

module.exports = router;