var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database = require("./config/database");

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var auth = require("./auth/main_auth");
var cors = require("cors");

var serviciosRouter = require('./routes/servicios.router');
var citasRouter = require('./routes/citas.router');
var citasServiciosRouter = require('./routes/citasServicios.router');
var usuariosRouter = require('./routes/usuarios.router');
var usuariosRegisterRouter = require('./routes/usuariosRegister.router');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//Mongo connection
database.mongoConnect(); 

//Router
app.use('/usuarios', usuariosRegisterRouter);
//primero se logea se autentica para poder acceder s lo demás
app.use('/usuarios', usuariosRouter);
app.use(auth);//Debería ir después del proceso de Login

app.use('/servicios', serviciosRouter);
app.use('/citas', citasRouter);
app.use('/citasServicios', citasServiciosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
