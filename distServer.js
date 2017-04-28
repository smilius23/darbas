const http = require('http');
const express = require('express');
const path = require('path');
const compression = require('compression');
const cookieParser = require('cookie-parser');

/*eslint-disable no-console */
const colors = require('colors');

const port = 8080;
const app = express();
app.set('port', process.env.PORT || port);

app.use(compression());
app.use(express.static('dist'));

app.set('views', path.join( __dirname, './dist'));
app.set('view engine', 'ejs');

app.get('*', function(req, res) {
  res.render('index', {reactOutput: 'Linkejimai is backendo!'});
});


const server = http.createServer(app);

server.listen(app.get('port'), function() {
  console.log('Server started on port: ', server.address().port);
});
