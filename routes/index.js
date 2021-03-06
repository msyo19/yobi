var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.post('/test', function(req, res, next) {
  res.status = 400;
});

router.get('/index', function(req, res, next) {
  res.sendFile(path.resolve('public', 'index.html'));
});

router.get('/inicio', function (req, res, next) {
  res.sendFile(path.resolve('public', 'inicio.html'));
});

router.get('/perfilProveedor', function (req, res, next) {
  res.sendFile(path.resolve('public', 'perfilProveedor.html'));
});

router.get('/perfilUsuario', function (req, res, next) {
  res.sendFile(path.resolve('public', 'perfilUsuario.html'));
});

router.get('/registerTrabajo', function (req, res, next) {
  res.sendFile(path.resolve('public', 'registerTrabajo.html'));
});

router.get('/servicios', function (req, res, next) {
  res.sendFile(path.resolve('public', 'servicios.html'));
});

router.get('/perfilProveedor', function (req, res, next) {
  res.sendFile(path.resolve('public', 'perfilProveedor.html'));
});



router.get('/perfilUsuario', function (req, res, next) {
  res.sendFile(path.resolve('public', 'perfilUsuario.html'));
});
module.exports = router;
