Spatial Data Aggregation using turf
===

[turf](http://morganherlocker.com/post/turf) has seen some recent improvements. Data aggregations have been implemented that allow for convenient aggregation of point values within polygons. Obviously, this is pretty essential for most geographic data analysis. Currently supported operations are sum, average, median, min, max, count, deviation, and variance. 

Each of these have a simple interface that works with a feature collection of polygons, a feature collection of points, an in field, and an out field. Here is an example of summing population values of points within some polygons:

```javascript
var t = require('turf')

// Setup some points and polys. These are created using turf's helper 
// functions, but any valid geojson feature collections would work.

var poly1 = t.polygon([[[0,0],[10,0],[10,10], [0,10]]])
var poly2 = t.polygon([[[10,0],[20,10],[20,20], [20,0]]])
var polyFC = t.featurecollection([poly1, poly2])
var pt1 = t.point(1,1, {population: 500})
var pt2 = t.point(1,3, {population: 400})
var pt3 = t.point(14,2, {population: 600})
var pt4 = t.point(13,1, {population: 500})
var pt5 = t.point(19,7, {population: 200})
var ptFC = t.featurecollection([pt1, pt2, pt3, pt4, pt5])

// Pass the collections with the point field to be summed, and the name
// of the field to append to the polygon properties.
t.sum(polyFC, ptFC, 'population', 'pop_sum', function(err, averaged){
  if(err) throw err

  console.log(averaged.features[0].properties.pop_sum) // 900
  console.log(averaged.features[1].properties.pop_sum) // 1300
})
```

Often times, you may need to aggregate many fields at once. In these cases, you can use the aggregate function and provide an array of aggregations to be performed. This adds significant convenience for common spatial data aggregations:

```javascript
var t = require('turf')

var poly1 = t.polygon([[[0,0],[10,0],[10,10],[0,10]]])
var poly2 = t.polygon([[[10,0],[20,10],[20,20], [20,0]]])
var polyFC = t.featurecollection([poly1, poly2])
var pt1 = t.point(5,5, {population: 200})
var pt2 = t.point(1,3, {population: 600})
var pt3 = t.point(14,2, {population: 100})
var pt4 = t.point(13,1, {population: 200})
var pt5 = t.point(19,7, {population: 300})
var ptFC = t.featurecollection([pt1, pt2, pt3, pt4, pt5])
var aggregations = [
  {
    aggregation: 'sum',
    inField: 'population',
    outField: 'pop_sum'
  },
  {
    aggregation: 'average',
    inField: 'population',
    outField: 'pop_avg'
  },
  {
    aggregation: 'median',
    inField: 'population',
    outField: 'pop_median'
  },
  {
    aggregation: 'min',
    inField: 'population',
    outField: 'pop_min'
  },
  {
    aggregation: 'max',
    inField: 'population',
    outField: 'pop_max'
  },
  {
    aggregation: 'count',
    outField: 'point_count'
  },
  {
    aggregation: 'deviation',
    inField: 'population',
    outField: 'pop_deviation'
  },
  {
    aggregation: 'variance',
    inField: 'population',
    outField: 'pop_variance'
  }
]

t.aggregate(polyFC, ptFC, aggregations, function(err, polys){
  if(err) throw err
  console.log(polys)
})
```

Want to get involved with turf? Check out the [turf github page](https://github.com/morganherlocker/turf).

---

*12-21-13*