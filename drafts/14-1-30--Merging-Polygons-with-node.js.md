Merging Polygons with node.js
===

Merging a set of polygons with [turf](https://github.com/morganherlocker/turf) is pretty straight forward. 

1. Get your [polygon features into a feature collection](https://github.com/morganherlocker/turf-world-merge/blob/master/countries.geojson) like so:

  <img src='/img/countries_merge.jpg' style='width:100%'>

2. Load the file into memory with node's fs module:

  ```js
  var require('turf')

  // load countries
  t.load('./countries.geojson', function(err, countries){
    
  })
  ```

3. call turf's merge function:

  ```js
  t.merge(countries, function(err, world){

  })
  ```

4. Lastly, write the file to disc or display it somewhere. Here it is all together:

  ```js
  var t = require('turf'),
      fs = require('fs')

  // load countries
  t.load('./countries.geojson', function(err, countries){
    // merge the feature collection
    t.merge(countries, function(err, world){
      // write out the file
      fs.writeFile('./world.geojson', JSON.stringify(world), function(err){
        console.log('presto!')
      })
    })
  })
  ```

And [here is the result](https://github.com/morganherlocker/turf-world-merge/blob/master/world.geojson):

<img src='/img/world_merge.jpg' style='width:100%'>


I packaged this all up i[nto a github repo](https://github.com/morganherlocker/turf-world-merge) if you want to clone it an try it out. To test out the code do:

```bash
git clone https://github.com/morganherlocker/turf-world-merge.git
cd turf-world-merge
npm install
node index.js
```

---

*1-30-14*