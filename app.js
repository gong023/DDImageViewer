var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var routes = require("./routes");
app.get('/', routes.index);
app.post('/display', routes.display)

http.createServer(app).listen(app.get('port'), function() {
  console.log('===== start app =====');
});
