var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors = require('cors');
//rutas controladores
var userRouter = require('./src/routes/userRoutes');


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
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// rutas controladores
app.use('/yobi/api/users',userRouter);
module.exports = app;
