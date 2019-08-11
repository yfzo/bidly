var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const ENV         = process.env.ENV || "development";
const knexConfig = require('./knexfile')    // require environment's settings from knexfile
const knex = require('knex')(knexConfig[ENV]);              // connect to DB via knex using env's settings
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//listing routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var testAPIRouter = require("./routes/testAPI");
var auctionsRouter = require('./routes/auctions')
var bidsRouter = require('./routes/bids')
var loginRouter = require('./routes/login')
var registerRouter = require('./routes/register')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors({credentials: true}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//routers
app.use('/', indexRouter);
app.use('/users', usersRouter(knex));
// app.use("/testAPI", testAPIRouter);
app.use('/auctions', auctionsRouter(knex));
app.use('/bids', bidsRouter(knex));
app.use("/register", registerRouter);
app.use("/login", loginRouter(knex));


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

// authentication helper methods
app.hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

app.comparePassword = (hashPassword, password) => {
  return bcrypt.compareSync(password, hashPassword);
}

/**
 * isValidEmail helper method
 * @param {string} email
 * @returns {Boolean} True or False
 */
app.isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
}

/**
 * Generate Token
 * @param {string} id
 * @returns {string} token
 */
app.generateToken = (id) => {
  const token = jwt.sign({
    userId: id
  },
    process.env.SECRET, { expiresIn: '7d' }
  );
    return token;
  }

module.exports = app;
