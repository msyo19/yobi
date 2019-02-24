var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors = require('cors');
var session = require('express-session');
//rutas controladores
var userRouter = require('./src/routes/userRoutes');
var categoriaRouter = require('./src/routes/categoriaRoutes');
var userModel= require('./src/models/users.js');

var app = express();
app.use(cors());
mongoose.connect('mongodb://localhost:27017/Yobi', (err) =>{
	if (err) throw err;
	console.log('Coneccion Existosa');
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.session({secret: 'abcd'}));
app.use(session({
	secret: 'UniversoSiete',
	resave: false,
	saveUninitialized: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/test', function(req, res, next) {
  res.status = 400;
});

app.get('/index', function(req, res, next) {
  if (req.session._id == null) {res.sendFile(path.resolve('public', 'index.html'));}
  else{res.sendFile(path.resolve('public', 'inicio.html'));}
});

app.get('/inicio', function (req, res, next) {
	if (req.session._id != null) {res.sendFile(path.resolve('public', 'inicio.html'));}
  else{res.sendFile(path.resolve('public', 'index.html'));}
});

app.get('/perfilProveedor', function (req, res, next) {
	if (req.session._id != null) {res.sendFile(path.resolve('public', 'perfilProveedor.html'));}
 else{res.sendFile(path.resolve('public', 'index.html'));}
});

app.get('/perfilUsuario', function (req, res, next) {
	if (req.session._id != null) {res.sendFile(path.resolve('public', 'perfilUsuario.html'));}
  else{res.sendFile(path.resolve('public', 'index.html'));}
});

app.get('/registerTrabajo', function (req, res, next) {
	if (req.session._id != null) {res.sendFile(path.resolve('public', 'registerTrabajo.html'));}
  else{res.sendFile(path.resolve('public', 'index.html'));}
});

app.get('/servicios', function (req, res, next) {
	if (req.session._id != null) {res.sendFile(path.resolve('public', 'servicios.html'));}
  else{res.sendFile(path.resolve('public', 'index.html'));}
});

app.get('/perfilProveedor', function (req, res, next) {
	if (req.session._id != null) {}
  else{res.sendFile(path.resolve('public', 'index.html'));}
});

app.get('/perfilUsuario', function (req, res, next) {
	if (req.session._id != null) {}
  else{res.sendFile(path.resolve('public', 'index.html'));}
});
app.use('/users', usersRouter);
// rutas controladores

app.use('/yobi/api/users',userRouter);
app.use('/yobi/api/categoria',categoriaRouter);

app.post('/session', (req, res) => {
	userModel.findOne({
		email: req.body.email,
		password: req.body.pass
	}, (err, Usuario) => {
		if (Usuario == null) {
			return res.send(err)
		}else{
		req.session._id = Usuario._id;
		res.send(req.session._id)
	}
	});
});

app.get('/session2', (req, res) => {
	userModel.findOne({
		_id: req.session._id
	}, (err, Usuario) => {
		if (Usuario == null) {
			console.log(req.session._id,"hola")
			return res.send(err)
		}else{
		res.json({Usuario});
		console.log(Usuario,req.session._id)
	}
	});
});
module.exports = app;
