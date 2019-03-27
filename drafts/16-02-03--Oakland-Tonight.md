Oakland Tonight
===

I recently moved from Washington DC to Oakland, California. To help get to know the area better, I decided to create [oakland-tonight](http://oakland-tonight.com/), a simple site for tracking upcoming shows and other events around Oakland.

The original concept was created by [@tmcw](https://twitter.com/tmcw) in the form of [dctn](http://www.macwright.org/2014/08/11/dctn.html), a nightly event scraper for DC. I liked the simplicity of the idea: instead of showing a packed calendar full of events, dctn displayed only events happening that evening. [@drdemsyn](https://twitter.com/drdemsyn) built on this idea with [chs-tonight](http://chs-tonight.com/) -- an event scraper for Charleston, South Carolina -- with the addition of weekly event summaries for those who would benefit from a *little bit* of planning ahead. oakland-tonight is mostly a fork of chs-tonight.

### How it Works

Similar to dctn, and even more similar to chs-tonight, oakland-tonight uses a mix of [cron](https://en.wikipedia.org/wiki/Cron), [node.js](http://nodejs.org/), and [Github Pages](https://pages.github.com/). A node script is periodically run that dynamically loads and runs a set of source modules; scrapers that parse structured show data from unstructured venue website calendars. This source data is then used to generate a new version of the static site, and the result is pushed to Github. This architecture works well, because the scraper can do the slowish downloading once in a while on a tiny server, while serving the static site stays lightning fast and robust with no effort on my part.

### Venues

Thirteen venues are being tracked to start, but around a dozen more are [planned](https://github.com/morganherlocker/oakland-tonight/issues/1). Most are music oriented, but I made an effort to include venues with less of a `booze+music` focus as well.

- [The Fox Theater](www.thefoxoakland.com/)
- [Comedy Oakland](www.comedyoakland.com/)
- [Freight & Salvage](http://freightandsalvage.org/)
- [The Golden Bull](http://thegoldenbullbar.com/)
- [The Legionnaire Saloon](http://legionnairesaloon.com/)
- [Oakland Museum of California](http://museumca.org/)
- [The New Parish](http://thenewparish.com/)
- [The Night Light](http://www.thenightlightoakland.com/)
- [The Octopus Literary Salon](https://oaklandoctopus.org/)
- [Oracle Arena](http://www.coliseum.com/)
- [Starry Plough](http://www.thestarryplough.com/)
- [SudoRoom](http://sudoroom.org/)
- [Yoshi's](http://yoshis.com/)

The main limiting factor here is my knowledge of the lesser known venues around town (still exploring!), and the overall awful quality of many of the smaller venue's websites. A robust text summarizer and metadata extractor that works with unstructured content will be necessary to hit the long tail of indie venues.

If you want to report a bug, request a feature, or add a new venue let me know [on Github](https://github.com/morganherlocker/oakland-tonight/issues) or on twitter [@morganherlocker](https://twitter.com/morganherlocker).

---

*2-4-16*
