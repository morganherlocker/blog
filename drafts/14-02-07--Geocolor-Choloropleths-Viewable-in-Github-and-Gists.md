Geocolor Choloropleths Viewable in Github and Gists
===

Github conveniently renders geojson and topojson files on the fly. This is useful for passing around geographic data and getting a quick look at what is in a file. They also [implement the simplestyle-spec](https://github.com/blog/1772-diffable-more-customizable-maps), which allows geojson data to contain information about how it should be rendered. 

This is useful for distinguishing between different types of points (parks vs airports), but since they allow for any arbitrary fill color, it also opens up more interesting possibilities. [Choloropleths](http://en.wikipedia.org/wiki/Choropleth_map), a type of thematic map, are one of those possibilities that help to better understand data trends in geographic data.

Using the [geocolor](https://github.com/morganherlocker/geocolor) module, geo data can be classified and themed easily to create these types of maps. The resulting geojson can then be added to a github repo or a gist and shared in an interactive format, something that would normally require GIS software or a custom web app (using something like [d3](http://d3js.org/) or [leaflet](http://leafletjs.com/)).

Let's look at an example. In this case we have a set of [counties in South Carolina, each with a poverty index](https://gist.github.com/morganherlocker/8867604#file-sc_poverty_unstyled-geojson). 

<img src='/img/poverty_unstyled.jpg' style='width:100%'>

First we install geocolor:

```bash
npm install geocolor
```

Then we can use it in javascript. In this case we will classify the data using quantiles (although we can choose from [several other options](https://github.com/morganherlocker/geocolor#classification)) and set the color ramp from blue to red. Any number of colors can be included in the color ramp (I recommend [colorbrewer](http://colorbrewer2.org/) if you are looking for good ideas).

Here is what the code should look like:

```js
var fs = require('fs'),
    geocolor = require('geocolor')

var geo = JSON.parse(fs.readFileSync(__dirname+'/in/sc_pov.geojson'))

geo = geocolor(geo, 'poverty', 'quantile', 7, ['blue', 'red'])

fs.writeFileSync(__dirname+'/out/sc_pov_choloropleth.geojson', 
                  JSON.stringify(geo))
```

Now the results are in a file that we can [upload to a gist](https://gist.github.com/morganherlocker/8867604#file-sc_counties_poverty_styled-geojson) or include in a gtihub repo.

<img src='/img/poverty_styled.jpg' style='width:100%'>

---

*2-7-14*