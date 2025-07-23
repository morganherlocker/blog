const glob = require('glob')
const fs = require('fs')
const rm = require('rimraf').sync
const marked = require('marked').parse
const _ = require('lodash')

const template = fs.readFileSync('./views/template', 'utf8')

const pages = glob.sync('./pages/*')
let drafts = glob.sync('./drafts/*').map(d => {
  const file = d.split('/')[d.split('/').length-1]
  const copy = fs.readFileSync(d, 'utf8')
  const name = copy.split('\n')[0]
  const url = name.split(' ').join('-')
  const html = template.split('{content}').join(marked(copy))
  return {
    name: name,
    content: html,
    copy: copy,
    file: file,
    url: url
  }
})
drafts = _.sortBy(drafts, 'file').reverse()
pages.forEach(path => {
  const name = path.split('/')[path.split('/').length-1]
  let content = fs.readFileSync(path, 'utf8')
  let postsList = '<h1>Recent posts</h1>'
  drafts.forEach((d, i) => {
    if (i > 4) return
    postsList += '<p><a href="/post/'+d.url+'">'+d.name+'</a>'
  })
  postsList += '<p><a href="/posts/index.html">more...</a>'
  content +=  marked(postsList)
  content = template.split('{content}').join(content)
  rm('./'+name)
  fs.mkdirSync('./'+name)
  fs.writeFileSync('./'+name+'/index.html', content)
  if (name == 'about') {
    fs.writeFileSync('./index.html', content)
  }
})

rm('./posts')
let postsList = '<hr>'
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

fs.openSync('./rss.xml', 'w');
fs.unlinkSync('./rss.xml')
let rss = ''
rss += '<rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:webfeeds="http://webfeeds.org/rss/1.0" version="2.0">'
rss += '<channel>'
rss += '<title>morganherlocker</title>'
rss += '<link>http://morganherlocker.com</link>'
rss += '<description>website of @morganherlocker</description>'
drafts.slice(0,5).forEach(d => {
  const body = marked(d.copy.split('===').slice(1).join(''))
  let date = d.file.split('--')[0].split('-')
  date = new Date(date[1]+'/'+date[2]+'/'+date[0]).toUTCString()
  rss += '<item>'
  rss += '<title>' + d.name + '</title>'
  rss += '<dc:creator>Morgan Herlocker</dc:creator>'
  rss += '<pubDate>' + date + '</pubDate>'
  rss += '<link>http://morganherlocker.com/post/'+d.url+'</link>'
  rss += '<guid isPermaLink="true">http://morganherlocker.com/post/'+d.url+'</guid>'
  rss += '<description><![CDATA['+body+']]></description>'
  rss += '</item>'
})
rss += '</channel>'
rss += '</rss>\n'
fs.writeFileSync('./rss.xml', rss)
