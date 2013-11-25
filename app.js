
/**
 * Module dependencies.
 */

var express = require('express')
  , index = require('./routes/index')
  , posts = require('./routes/posts')
  , http = require('http')
  , path = require('path')
  , fs = require('fs')
  , _ = require('lodash')

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index);
app.get('/posts', posts)
postInfos = []
var i = 0
fs.readdir(__dirname+'/posts/', function(err, files){
  _.each(files, function(file){
    fs.readFile(__dirname+'/posts/'+file, 'utf8', function(err, content){
      var title = content.split('===')[0]
      var url = title.split(' ').join('-')
      postInfos.push({title: title, url: url})
      if(i>file.length){
        http.createServer(app).listen(app.get('port'), function(){
          console.log('Express server listening on port ' + app.get('port'));
        });
      }
      i++
    })
  })
})
