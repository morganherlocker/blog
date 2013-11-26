var fs = require('fs'),
    path = require('path'),
    _ = require('lodash')

module.exports = function(req, res){
  console.log('posts requested!!!!!!!!!!')
  res.render('posts', {posts: postInfos});
};