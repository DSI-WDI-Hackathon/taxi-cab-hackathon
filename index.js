//express-mustache boilerplate
const express = require('express'),
      pgp = require('pg-promise')(),
      mustacheExpress = require('mustache-express'),
      bodyParser = require('body-parser'),
      PORT = process.env.PORT || 8080;
const app = express();
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname+'/views');
app.use(express.static(__dirname+'/public'));
//logger package to check success/failure
const morgan = require('morgan');
app.use(morgan('dev'));
//body-parser for parsing JSON
app.use(bodyParser.urlencoded({
        extended: true
}));
//hook up router
app.use(bodyParser.json());
app.use(require('./router'));
//check for life
app.listen(PORT, ()=>{
  console.log(`ALIVE on PORT ${PORT}`);
});
