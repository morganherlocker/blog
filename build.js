var glob = require('glob')
var fs = require('fs')
var rm = require('rimraf').sync
var marked = require('marked')
var _ = require('lodash')

var template = fs.readFileSync('./views/template', 'utf8')

var pages = glob.sync('./pages/*')
pages.forEach(path => {
  var name = path.split('/')[path.split('/').length-1]
  var content = fs.readFileSync(path, 'utf8')
  var content = template.split('{content}').join(content)
  rm('./'+name)
  fs.mkdirSync('./'+name)
  fs.writeFileSync('./'+name+'/index.html', content)
})

var drafts = glob.sync('./drafts/*').map(d => {
  var file = d.split('/')[d.split('/').length-1]
  var copy = fs.readFileSync(d, 'utf8')
  var name = copy.split('\n')[0]
  var url = name.split(' ').join('-')
  var html = template.split('{content}').join(marked(copy))
  return {
    name: name,
    content: html,
    file: file,
    url
  }
})
drafts = _.sortBy(drafts, 'file').reverse()

rm('./posts')
var postsList = '<hr>'
drafts.forEach(d => {
  postsList += '<p><a href="/post/'+d.url+'">'+d.name+'</a>'
})

fs.mkdirSync('./posts')
fs.writeFileSync('./posts/index.html', template.split('{content}').join(marked(postsList)))

rm('./post')
fs.mkdirSync('./post')
drafts.forEach(d => {
  fs.mkdirSync('./post/'+d.url)
  fs.writeFileSync('./post/'+d.url+'/index.html', d.content)
})

fs.writeFileSync('./index.html', _.first(drafts).content)