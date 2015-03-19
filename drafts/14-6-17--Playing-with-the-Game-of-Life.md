Playing with the Game of Life
===

Let me start this post by saying that if you have been around the block, you will probably find this pretty mundane. That said, I want to go over a classic game/hack/algorithm that every generation rediscovers.

In 1970, mathematician [John Horton Conway](http://en.wikipedia.org/wiki/John_Horton_Conway) devised a simulation called the [the Game of Life](http://en.wikipedia.org/wiki/Conway's_Game_of_Life). It is a deceptively simple cellular automaton, that allows complex designs to arise from simple seed patterns.

![game of life gif](http://fat.gfycat.com/RawOrneryFanworms.gif)

The beauty of this algorithm is in its simplicity. There are only a [few rules](http://en.wikipedia.org/wiki/Conway's_Game_of_Life#Rules):

1. Any live cell with fewer than two live neighbors dies, as if caused by under-population.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by overcrowding.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

From this, "creatures" will often emerge; the most well known being the glider. With these seed points...

<style>
td {
  border: 2px solid black;
  width: 28px;
}
</style>
<table>
<tr><td></td><td>&nbsp;&nbsp;0</td><td></td></tr>
<tr><td></td><td></td><td>&nbsp;&nbsp;0</td></tr>
<tr><td>&nbsp;&nbsp;0</td><td>&nbsp;&nbsp;0</td><td>&nbsp;&nbsp;0</td></tr>
</table>

...we end up with a pattern that will move across the grid until it runs into another set of live cells.

![game of life gif](/img/gol-glider.gif)

Conway's Game of Life has been a mainstay of weekend hacks for ~45 years, and shows no signs of slowing down. There are countless variations, and new patterns are continuously being explored. One of the most impressive variations is SmoothLife, an implementation that modifies the rules to allow for continuous values, instead of the classic discrete rules.

<iframe width="420" height="315" src="//www.youtube.com/embed/KJe9H6qS82I" frameborder="0" allowfullscreen></iframe>

[Here is the source](https://github.com/morganherlocker/gol/blob/master/index.js) for my rough implementation that generated the first two gifs above. If you have never implemented it yourself, I highly recommend taking an hour or two sometime to write your own version from scratch. 

*WARNING:* you will likely become obsessed with this game, and in extreme cases, may even find the urge to [build an implementation of GOL within a mechanical computing machine running inside of the game Dwarf Fortress](http://www.bay12forums.com/smf/index.php?topic=69307.0), a game that is itself, a sort of souped up version of GOL. You have been warned. \PSA

---

*6-17-14*