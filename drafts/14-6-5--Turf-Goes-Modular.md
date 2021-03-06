Turf Goes Modular
===

**[Turf](https://github.com/Turfjs/turf) has undergone a major refactor. The main improvements are:**

- Dependencies like lodash and async.js have been removed.

- Tests have been switched from running on [mocha](http://visionmedia.github.io/mocha/) to [tape](http://www.macwright.org/2014/03/11/tape-is-cool.html) for easy browser testing. Tape uses the [Test Anything Protocol](http://testanything.org/), which integrates with many cli tools like [faucet](https://github.com/substack/faucet).

- Every turf function has been broken into its own seperate module, so you can install what you need and nothing else.

- Turf has passed ownership from my personal github account to a community account, [Turfjs](https://github.com/turfjs), to allow for better collaboration between contributors.

- Interfaces have been switched from async to sync. Turf does not deal with io, so sync interfaces are easier to use, with no downsides.

This release has been a multi-month process, and represents an effort to make turf work better in resource constained environments and in the browser. Turf's main goal has always been to make a geo stats engine that is easy to install and easy to use, and I think this goes a long way towards that objective.

As always, feature requests are welcome, so [drop us a line if you have an idea for use case for a new feature](https://github.com/Turfjs/turf/issues?state=open).

Special thanks to the many contributors to this push, especially [@tmcw](https://twitter.com/tmcw) and [@adamdrago](https://twitter.com/adamdrago).

---

*6-5-14*