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
    copy: copy,
    file: file,
    url: url
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

fs.unlinkSync('./rss.xml')
var rss = ''
rss += '<rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:webfeeds="http://webfeeds.org/rss/1.0" version="2.0">'
rss += '<channel>'
rss += '<title>morganherlocker</title>'
rss += '<link>http://morganherlocker.com</link>'
rss += '<description>website of @morganherlocker</description>'
drafts.slice(0,5).forEach(d => {
  var body = marked(d.copy.split('===').slice(1).join(''))
  var date = d.file.split('--')[0].split('-')
  date = new Date(date[1]+'/'+date[2]+'/'+date[0]).toUTCString()
  rss += '<item>'
  rss += '<title>' + d.name + '</title>'
  rss += '<dc:creator>Morgan Herlocker</dc:creator>'
  rss += '<pubDate>' + date + '</pubDate>'
  rss += '<link>http://morganherlocker.com/post/'+d.url+'</link>'
  rss += '<description><![CDATA['+body+']]></description>'
  rss += '</item>'
})
rss += '</channel>'
rss += '</rss>\n'
fs.writeFileSync('./rss.xml', rss)
