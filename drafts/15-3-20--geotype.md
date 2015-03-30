geotype
===

[Geotype](https://github.com/morganherlocker/geotype) is a cli tool for rendering GeoJSON from the command line. While this might seem fairly ridiculous/pointless, it can actually be quite useful for quickly seeing what sort of geography is lurking inside a GeoJSON file. While tools like [geojson.io](http://geojson.io/) and [geojson-cli](https://github.com/mapbox/geojsonio-cli) provide a quick way to do this in the browser, a faster feedback loop is often helpful.

Here's what it looks like in action. Given a GeoJSON file that contains something like this:

![](/img/world-geojson.png)

...we can use geotype to render it like this:

```sh
geotype world.geojson
```

![](/img/geotype1.gif)

Let's say we want something higher resolution, we can overzoom using the `--mod` flag.

```sh
geotype world.geojson -m 4
```

![](/img/geotype2.gif)

Don't want color? Use the `--no-color` flag to render to plain old acii.

```sh
geotype world.geojson -m 4 --no-color
```

![](/img/geotype3.gif)

geotype can also distinguish between points, lines, and polygons. Here's how it renders a GeoJSON FeatureCollection containing all Vermont libraries (points), highways (lines), and zipcodes (polygons) with and without color.

```sh
geotype vermont.geojson
```

![](/img/geotype4.gif)

The `--zoom -z` flag allows a pixel zoom to be specified. Each pixel is equivalent to one tile at the given zoom. Let's zoom in on our Vermont file with a simple bash for loop.

```sh
for i in `seq 6 12`; do geotype vermont.geojson -z $i; done
```

![](/img/geotype5.gif)

Use the `--bbox` flag to fit the ascii "image" to a specific bounding box, or use the `--tile` flag to fit the render to an x/y/z map tile. Let's cycle vertically across a column of tiles against our world.geojson file to try it out.

```sh
for i in `seq 0 11`; do geotype world.geojson -t 4/$i/4 -z 9; done
```

![](/img/geotype6.gif)

...at a higher zoom

```sh
for i in `seq 0 11`; do geotype world.geojson -t 4/$i/4 -z 11; done
```

![](/img/geotype7.gif)

##how it works

Geotype is 100% JavaScript, and can be used in the browser via tools like browserify. Under the hood, it uses [tile-cover](https://github.com/mapbox/tile-cover) and [tilebelt](https://github.com/mapbox/tilebelt/) for rasterization, along with some clever code for picking default bboxes and pixel sizes. 

While tile-cover and tilebelt were initially built for [super fast indexing in node](https://github.com/mapbox/carmen), their use of scanline algorithms originally designed for graphics processing and video games make them ideal candidates for a pure JavaScript map renderer. In fact, tile-cover is significantly faster than the best of breed distributed geospatial C++ indexers currently available, and it is designed with multi-core high cpu node.js processing in mind.

Using [canvas]() and [Leaflet's canvas layer](http://leafletjs.com/reference.html#tilelayer-canvas) it would even be possible to build a pure JavaScript clientside map renderer, for instances where GL clientside rendering is not possible. In fact, using geotype, web map rendering may even be possible in pure text browsers, such as [Lynx](http://en.wikipedia.org/wiki/Lynx_%28web_browser%29).

##caveats

Keep in mind, this is a mad science hack. Aside from using geotype as a test diff renderer or a repl tool, I would not recommend geotype for "real" map rendering. WebGL has the ability to highly parallelize work across the GPU, so geotype is never going to compete with rendering times close to those of Mapnik or WebGL.

*Now that that's out of the way, let's render a bunch of shit in ascii.*

![](/img/geotype8.gif)

---

*3-20-15*