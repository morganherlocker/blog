unixy geo
===

This post represents some hypothetical geo proc patterns I am hoping to enable in the next 3-6 months through a [major overhaul of turf](https://github.com/morganherlocker/turf/issues/104). There are awesome tools out there already for processing geospatial data from shell, but I want to make it significantly simpler than what current tools like GrassGIS and GDAL provide, while maintaining compatibility through common *nix conventions. 

For example, turf is focused exclusively on geojson data, but if you could pipe in the [plethora of files supported by ogr2ogr](http://www.gdal.org/ogr/ogr_formats.html), it would make things much more flexible, without having to port those huge libraries over to node (although that might be cool too).

The main goal here is to support easy geospatial analysis on the largest number of platforms possible, like node.js, shell, and client-side javascript. In the future, I would even like to have some sort of geo-proc server that can serve this functionality over http (maybe even with clustered load balancing), which would allow geoprocessing in languages that have not received much attention in the past.

For now though, here is a collection of possible usages I would like to support. Please provide feedback [@morganherlocker](https://twitter.com/morganherlocker) if you have any thoughts on improvements to the general workflow. Keep in mind that all of the turf functionality will still be available in node.js and browser js for those not familiar with shell scripting, so nothing is lost by adding a cli.

---

Create a 5 mile buffer around all households, merge the polygons, and output a geojson file representing populated areas.

```sh
cat households.geojson |
turf_buffer --distance 5 --units "miles" |
turf_merge >
populated_areas.geojson
```

Crunch some stats on counties, given block census data.

```sh
cat counties.geojson |
turf_sum \
  --points block_points.geojson \
  --z "population" \
  --out_field "population_sum" |
turf_avg \
  --points block_points.geojson \
  --z "median_income" \
  --out_field "median_income_avg" |
geocolor \
  --classification "quantiles" \
  --z "median_income_avg" \
  --breaks 5 \
  --colors red,yellow,green |
geojsonio
```

Create a contour map given a set of elevation points, then pipe the results into geojson.io.

```sh
cat elevation_pts.geojson |
turf-isolines \
  --z "elevation" \
  --resolution 40 \
  --breaks 0,500,2000,5000,10000 |
geojsonio
```

Merge counties to create a US file using redirects.

```sh
turf-merge < counties.geojson > us.geojson
```

---
*4-15-14*