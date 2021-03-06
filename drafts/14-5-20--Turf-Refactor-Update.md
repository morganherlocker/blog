Turf Refactor Update
===

I am coming into the final stretch of [fully modularizing turf](https://github.com/morganherlocker/turf/issues/106). On the dependency front:

- Lodash is gone
- Async is gone
- simple-statistics stays (it is only 42kb unminified, and seems justified considering how much it is used)
- JSTS is gone. I have decided to take the JSTS code and extract the bare minimum for each of the [transformation modules](https://github.com/morganherlocker/turf#transformation). This will allow me to gradually refactor the code to a more literate style, without having to spend 6 months writing all of these algos from scratch and retaining the ability to release turf. Also, other [work has been in progress to refactor these algos for geodesic calculations](https://github.com/morganherlocker/turf/issues/110), instead of 2d planar geometry thanks to the hard work of [@adamdrago](https://twitter.com/adamdrago).
- Topojson is gone. Topojson should be its own thing, and the turf topo function was just a wrapper. I was using it for simplification, but I will be switching that over to [mourner's implementation](https://github.com/mourner/simplify-js). It will probably lose topology preservation, but users can always use the topojson version if they can swallow the overhead (mostly d3). I am still exploring this, however, so suggestions are welcome.
- Internal dependencies stay, but I will document best practices with npm-dedupe for optimizing custom builds.

This has all been quite a bit of work, but I think the payoff will be huge. After the modules are complete:

- Re-document everything: All functions have been switched over to sync interfaces, so I will need to document the new usage patterns.
- CLI interfaces: I will create CLI interfaces for each of the modules. The end result (I hope) will be a badass, scriptable usage pattern, that will allow for turf to be used as a sort of super geo-REPL, or in makefiles the way [@mbostocks sets up data visualizations](http://bost.ocks.org/mike/make/).
- I will work on making turf "proper" a convenience lib that will package everything together. This will include npm deduping for builds, installing all of the cli modules in one place, and building docs/examples that show new users what you can do with turf in a holistic fashion for general analysis. People who know about these sorts of operations could already use other tools. I want to make turf the accessible solution that is beginner friendly.
- Setup some sort of CI environment that can handle this many modules all working in harmony. I am not sure about the specifics on this yet, but I would like turf "proper" to be able to get all of the latest versions of each of the module, run tests on travis for node, run tests in testling with most of the browsers on the browserify build, run perf benchmarks, etc.. We do not want an update to a submodule to break the larger build. 
- I will start to explore options with alternate streaming modules. The main win here would be reporting progress mid-process, since large datasets could take minutes/hours/days to run.

To be honest, I was a bit skeptical of the modular approach for this at first. Now that most of the work is done, I am optimistic that this will allow for the most flexible usage, which should lead to an increase in usability, and make it easier to contribute.

---

*5-20-14*