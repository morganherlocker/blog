var fs = require('fs')

module.exports = function(req, res){
  res.render('about', {config: config});
}