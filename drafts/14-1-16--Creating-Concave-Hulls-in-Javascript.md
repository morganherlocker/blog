Creating Concave Hulls in Javascript
===

[turf](https://github.com/morganherlocker/turf) (a general purpose gis processing engine written in node.js) makes it easy to create concave polygons from a set of points.

```javascript
var t = require('turf')
var maxEdge = 2.5

t.load('../test/testIn/concaveIn.geojson', function(err, points){
  t.concave(points, maxEdge, function(err, hull){
    if(err) throw err
    console.log(hull)
  })
})
```

The above code will create a concave polygon for you with just one call, but I also want to give a brief look into how the algorithm actually works for my fellow gis engine tinkerers.

We start with [some points](https://github.com/morganherlocker/turf/blob/master/test/testIn/concaveIn1.geojson):

<img src='/img/concavePoints.jpg' style='width:100%'>

From these points, we can create a TIN, which is a convex [triangular mesh of polygons](https://github.com/morganherlocker/turf/blob/master/test/testOut/tinConvcave.geojson) using the [tin function](https://github.com/morganherlocker/turf#tin):

<img src='/img/concaveTin.jpg' style='width:100%'>

Based on the max edge parameter, we throw out any parts of the mesh that reach too far; measured using the [distance function](https://github.com/morganherlocker/turf#distance):

<img src='/img/concaveFiltered.jpg' style='width:100%'>

Next we buffer the triangles slightly and merge the results using the [buffer](https://github.com/morganherlocker/turf#buffer) and [merge](https://github.com/morganherlocker/turf#merge) functions:

<img src='/img/concaveOut1.jpg' style='width:100%'>

If we want a bit more detail, we can lower the maxEdge:

<img src='/img/concaveOut2.jpg' style='width:100%'>

For an extra smooth result, we can also add a bit of a [rounded buffer to the result](https://github.com/morganherlocker/turf/blob/master/test/testOut/bufferConvcave.geojson) via the [buffer function](https://github.com/morganherlocker/turf#buffer):

<img src='/img/concaveOut3.jpg' style='width:100%'>


---

*1-16-14*