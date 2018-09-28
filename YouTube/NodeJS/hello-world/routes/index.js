const express = require('express');
const router = express.Router();
/*
router.get('/', () => { console.log('Server at / route') });
router.get('/', (req, res) => { res.end('Server at / route') });
*/
const accounts = [ {id:1, socialNetwork:'Facebook'}, 
                   {id:2, socialNetwork:'Google'},
                   {id:3, socialNetwork:'Instagram'} ];
router.get('/', (req, res)=>{ res.render('index', { title: 'DevHome', accounts: accounts }) });

module.exports = router;