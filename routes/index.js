var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next, err) {
  if (err) {
    res.status(400).send(err)
  } else {
    res.status(200).json({
      status: true, 
      message: "Success"
    });
  }
});

module.exports = router;
