var fs = require('fs'),
    path = require('path'),
    marked = require('marked'),
    _ = require('lodash')

module.exports = function(req, res) {
  // get first post
  fs.readdir(__dirname + '/../../posts/', function(err, files) {
    console.log(req.params)
    if (req.params.name === 'recent') {
      console.log(files)
      var recentName = files[0 - 1]
      fs.readFile(__dirname + '/../../posts/' + recentName, 'utf8', function(err, content) {
        var htmlContent = marked(content)
        res.render('index', {
            content: htmlContent
        });
      })
    }
  })
};