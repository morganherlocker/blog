Merge a Set of Polygons with turf
===

[turf](http://morganherlocker.com/post/turf) has added quite a few features centered around [spatial transformations](https://github.com/morganherlocker/turf#transformation) recently. Mostly these types of operations involve tasks such as merging a bunch of polygons, or erasing one polygon from another. 

There are lots of code examples in the docs, and the usage is very straightforward for anyone familiar with javascript and geojson. 

To highlight one of these examples, here is how you would easily merge a feature collection of polygons together:

```javascript
var t = require('turf'),
  fs = require('fs')

// mergeIn.geojson contains a feature collection of polygons
t.load('../test/testIn/mergeIn.geojson', function(err, polygons){
  t.merge(polygons, function(err, mergeOut){
    // mergeOut is a single polygon feature
    fs.writeFileSync('./testOut/merge.geojson', JSON.stringify(mergeOut))
  })
})
```

Note: since this example uses the filesystem, this needs to be in node.js, but if you had the objects in memory, it could be used in the browser. The results could then be displayed using leaflet or d3.

Here is a shot of the [polygon inputs](https://github.com/morganherlocker/turf/blob/master/test/testIn/mergeIn.geojson):

<img src='/img/mergeIn.jpg' style='width:100%'>

And here is the [result](https://github.com/morganherlocker/turf/blob/master/test/testOut/merge.geojson):

<img src='/img/mergeOut.jpg' style='width:100%'>

Want to get involved with turf? Check out the [turf github page](https://github.com/morganherlocker/turf).

---

*1-14-14*