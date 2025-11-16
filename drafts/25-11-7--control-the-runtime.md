Control the runtime
===

A dev mantra I've come to believe is this:


> Control your runtime. Know why your code is running, when it's running, and how long it's running. Never let a dependency control your outer loop.


In C, this usually looks something like this:

```c
while(1) {
    // The things my server does all live here.
}
```

...or using raylib:

```c
// raylib
while (!WindowShouldClose())
{
    // Update frame.
}
```

In JS, this might look something like this:

```js
requestAnimationFrame(function (){
    // The things my page does all live here.
});
```

I'm not too dogmatic about the particulars (Yes, I'm technically at the mercy of the event loop in both the raylib and JS examples), but I *always* try to keep this "while loop" mental model in mind. <strong>Once a dependency takes over the outer loop, it becomes part of the platform you are building on</strong>, and comes with a much higher burden of reliability and performance. Dependencies that don't live up to this should be scrutinized and rejected.

Serious performance issues are rarely an intentional choice someone makes. They happen when a group of contributors lose track of where and why their code is running. Each block of code looks reasonable in isolation, but the sum of parts leads to frame drops, unexplained pauses, and wait times that can't be explained by reasoning about the compute and memory available.

Framework dependencies that promise to manage your runtime are tempting - automatic reactivity, magic horizontal scaling, managed DAG execution, etc. all seem to abstract away performance and coordination concerns. How do we scale complexity without it? [John Carmack makes a related point about inlining code and the power of visibility and simple functional logic flow](https://cbarrete.com/carmack.html):

> The real enemy addressed by inlining is unexpected dependency and mutation of state, which functional programming solves more directly and completely. However, if you are going to make a lot of state changes, having them all happen inline does have advantages; you should be made constantly aware of the full horror of what you are doing. When it gets to be too much to take, figure out how to factor blocks out into pure functions (and don't let them slide back into impurity!). 

---

*11-16-25*