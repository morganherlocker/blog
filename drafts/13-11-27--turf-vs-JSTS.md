turf vs JSTS
===

Whenever I get into a discussion about [turf](https://github.com/morganherlocker/turf), one question always comes up:

    "What about JSTS?"

[JSTS](https://github.com/bjornharrtell/jsts) [JavaScript Topology Suite] is an awesome project. turf may even depend on some of its code in the future. At the same time, it is far more complicated than turf, and the learning curve is much steeper than with turf. Here are the main things I would point to that distinguish turf from JSTS:

- dead simple api. JSTS tends to follow Java idioms rather than node.js idioms (which is understandable, since it was a Java port). An example of this would be JSTS's use of factory patterns and complex object heirarchies vs turf's approach where everything is just a simple function. Another would be JSTS's more traditional api style vs turf's node callback style where the convention is to pass an asyncronous callback in the form of:

  ```javascript
  function(err, result) {
    // do stuff with the result
  } 
  ```

- geojson from the ground up. This means you can load any geojson file into memory, pass it directly into any turf function, and get geojson back that can be directly displayed into a map. No complex data structures or SQL WKT parsing makes it easier to use, especially for web development.

- functional programming style. This will make it easier to distribute work out over node.js computing clusters and do a lot of cool "mapreduce-y" type stuff.

- focus on data analysis, instead of topological manipulations (turf will do many of these things, but the real goal is more complex data analysis like spatial clustering, contours, tins, data classification, etc.).

- modularity: Eventually I plan to improve the build system so that each function can be packaged as its own npm module, similar to how underscore has been built. This is pretty trivial to add with some extra browserify configuration. This would allow someone who only needed one function to get the absolute minimum amount of code necessary, which is important for client side implementations.

In summary, JSTS and turf have different goals. In some cases, it is an either/or, but in many cases they are complimentary libraries. Turf is first and foremost a spatial analysis utility belt focusing on the data contained in the attributes of geometries. JSTS is focused on geometric processing and topological manipulation.

---

*11-27-13*