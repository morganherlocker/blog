Visualizing npm modules by Geography
===

[npm](https://npmjs.org/) is the node.js package manager. Coders from all over the world publish javascript packages through npm to distribute easy to consume modules, and it is [growing fast](http://modulecounts.com/). 

[@substack](https://github.com/substack) took up the task of [compiling npm modules by city using npm module authors cross referenced against listed github locations](https://gist.github.com/substack/7373338#file-cities), and the results were intriguing. 

This data lacked geo references, and it was begging to be visualized, so I did some processing on the data. Here is the repo with the data in various stages:

https://github.com/morganherlocker/geo-npm-contributions

Here is the geojson of the final output:

https://github.com/morganherlocker/geo-npm-contributions/blob/master/final.geojson

And here is a shot of the US, themed using a [natural breaks jenks classification](http://en.wikipedia.org/wiki/Jenks_natural_breaks_optimization) algorithm:

<img src='https://raw.github.com/morganherlocker/geo-npm-contributions/master/us.jpg' style='width:100%'>

Here is a shot of the US with a heatmap over an open street map basemap:

<img src='https://raw.github.com/morganherlocker/geo-npm-contributions/master/heatmap_osm.jpg' style='width:100%'>

And here is a shot of the world:

<img src='https://raw.github.com/morganherlocker/geo-npm-contributions/master/world.jpg' style='width:100%'>


A few notes on the data:

- This was just for fun, so the data is far from perfect. To perform the geocoding, I simply did a join against the largest and most complete world city dataset I could find in the open data realm. I did some basic data formatting to get this to line up, but there all sorts of ways this could fail. Still, the results were decent on that front.

- Also, the data from substack only included the top 572 module authors, so if a town had more authors, but with less modules, that might skew the data.

- The images I provided show what the data looks like with some theming. Github map preview is awesome for the quick view, but if you really want to do some visualizations, I recommend opening up the data in a real GIS application like QGIS and applying some themes. I classified and normalized the data already, so this should be pretty simple.

- Jenks classification is a generous visualiztion for any city that is not San Francisco or Oakland. They clearly dominate, and if you [use a classification methodolgy like quantiles](https://raw.github.com/morganherlocker/geo-npm-contributions/master/quantiles.jpg) or equal intervals, they light up while every other city fades out of the visualization for the most part. I chose jenks because, SV is clearly and outlier and I wanted to show a distribution that emphasized the spread of the community. Perhaps this is a bit disingenuous, but hey, that's statistics for you. :)

- It would be very interesting to see a visualization of this data weighted against population to get a "modules per capita" score of some sort. I may do this, but if anyone is interested, have at it!

- If we could get some sort of dependency graph across npm and do a rough join on this data, we could visualize dependencies across geography with weighted desire lines. That could be extremely interesting.

Interested in crunching geospatial data like this in node.js? Check out [turf](http://morganherlocker.com/post/turf).

---

*12-6-13*