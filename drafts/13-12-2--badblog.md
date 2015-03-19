badblog
===

[badblog](https://github.com/morganherlocker/badblog) is a terrible node.js blog engine with barely any features. :)

Interested? While it probably will not be what most people are looking for, I wanted to use a blog engine that had the absolute minimum number of features, which for me meant:

- uses node.js (not for any reason other than it is my primary stack at the moment)
- posts are just markdown files
- no config files for posts
- pretty urls
- everything can be versioned through git

There are a few other tools that are pretty close, but none that were exactly what I wanted, so I decided to write my own. 

It is exeptionally simple to use. Just do the following and you are up and running:

```bash
npm install badblog -g
badblog myBlog
cd myBlog
sudo npm start
```

You will then have a posts folder where you can throw in markdown files that will be loaded as posts whenever you restart the server. Use any of the various watcher tools out there and it would even be automatic. My blog is currently running on badblog in conjunction with [forever](https://github.com/nodejitsu/forever).

---

*12-2-13*