const http = require('http');
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
//const cookieParser = require('cookie-parser');

/* eslint-disable no-console */
import colors from 'colors';

const port = 3005;
const app = express();
const compiler = webpack(config);

app.set('port', process.env.PORT || port);

app.set('views', path.join( __dirname, '../src'));
app.set('view engine', 'ejs');

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res){
  res.render('index', {reactOutput: 'Linkejimai is backendo!'});
})

const server = http.createServer(app);
server.listen(app.get('port'), function() {
  console.log('Server started http://localhost:(%p)', server.address().port);
  open('http://localhost:'+server.address().port);
});
