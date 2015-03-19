Convex Hull in Javascript
===

Using [turf](http://morganherlocker.com/post/turf), we can a create convex hull from a set of points with just a few lines of javacript.

```javascript
var t = require('turf')

t.load('../test/testIn/convexIn.geojson', function(err, points){
  t.convex(points, function(err, hull){
    if(err) throw err
    console.log(hull)
  })
})
```

Here is the input:

<img src='/img/convexPoints.jpg' style='width:100%'>

and here is the result:

<img src='/img/convexPolygon.jpg' style='width:100%'>

---

*1-15-14*