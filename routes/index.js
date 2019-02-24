var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/test', function(req, res, next) {
  res.status = 400;
});

router.get('/test', function(req, res, next) {
  res.send('hola get')
});


module.exports = router;
