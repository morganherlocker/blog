turf + browserify
===

Turf has had a broken browser build for the past month or so. As of today, that is no longer the case. Now you can script geoprocessing tasks to your hearts content in the browser.

That being said, there is still plenty of room for improvement on the browser front. The main issues are:


1. The current minified file weighs in at ~700kb. Workable but painful.
2. jsts is still pretty painful to debug when something goes wrong. Errors are unhandled, the code follows Java idioms, and it accounts for about 500kb of the total 700kb.
3. If you use turf, you have to download the entire thing.


There are a few remedies to these issues that are in progress.

First, I am in the process of removing the jsts dependency.  jsts has lots of functionality and only a small fraction of it is actually used by turf.  The [new solution](https://github.com/morganherlocker/clipsy) will probably be somewhere around 50kb, and will be easier to refactor and debug.

Second, I am considering options for making turf modular. I want to balance the ease of use that turf currently provides, especially for its primary use case, as a simple server side geo scripting engine, against its use as a performant client-side engine. One way to accomplish this would be to implement a build step that would automatically create submodules for each of turf's functions. Another way would be to slowly port turf functions out to their own modules. My one fear with this is that it may lead to dependency bloat, but this may be mitigated by 'npm dedupe', assuming disipline is used in maintaining the same version of larger libs. Either way, this is a pretty high priority and there will be a way to download small chunks of turf in the future.

---
*3-18-14*