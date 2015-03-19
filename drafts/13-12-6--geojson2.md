geojson2
===

[geojson2](https://github.com/morganherlocker/geojson2) is a node.js utility module for exporting geojson files to various other formats. At release, it supports the following formats and may have more to come in the future:

- kml
- csv
- shapefile
- topojson

The module is extremely easy to use.

```javascript
geojson2.csv(__dirname+'/in.geojson', 
             __dirname+'/out.csv', 
             function(err){

})
geojson2.shp(__dirname+'/in.geojson', 
             __dirname+'/out.shp', 
             false, 
             function(err){

})
geojson2.kml(__dirname+'/in.geojson', 
             __dirname+'/out.kml', 
             function(err){

})
geojson2.topojson(__dirname+'/in.geojson', 
                  __dirname+'/out.topojson', 
                  function(err){

})
```

All of these functions are also maintained as independent modules, and can be used on their own. 

**If you would like to request additional formats, please submit an issue on github: **

https://github.com/morganherlocker/geojson2/issues

---

*12-6-13*