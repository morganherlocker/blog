Worm Helsing
===

Today my friend, [Dan Hanf](http://xoxodan.com/), and I released a game for the [4MB game jam](https://itch.io/jam/4mb-jam-2025). It was the first game jam for both of us, and the first game either of us had released.

## The 4mb game jam

The [4MB game jam](https://itch.io/jam/4mb-jam-2025) is a game jam that takes place every other year. The rules of the jam state that every submission must be a standalone desktop application and it must be below 4MB. This year, the theme was _'Worms, Holes and Wormholes'_, so we naturally decided to make a game about worms, and holes, and... you get the idea.

In the age of 100GB+ games, multi-dozen-MB web pages\*\*\*\*, and [7+ minute loading times](https://nee.lv/2021/02/28/How-I-cut-GTA-Online-loading-times-by-70/), the idea of trying to make something fun with a much smaller footprint was compelling. The submissions included a full 3D FPS in just 21KiB, as well as a puzzle game written in hand coded NASM assembly (2.4KiB).

## Our game

[Itch.io / Worm Helsing](https://morganherlocker.itch.io/worm-helsing)

Worm Helsing is an isometric hack-n-slash where you explore a procedurally generated warren of vampiric worms as an intrepid explorer. We wrote the game in C using the [raylib](https://www.raylib.com/) library. All audio was made by Dan in [Reaper](https://www.reaper.fm/), using a combination of synths and mic'd sounds. I made the sprites and animations in [Aseprite](https://www.aseprite.org/), a simple pixel editing tool, with procedural effects sprinkled in to cut size.

In the end, we submitted a game that was 1,043 KiB, uncompressed, with no additional dependencies.

<img src='/img/wormhelsing.gif' style='width:360px'>

## Relative size breakdown

Below is a [windirstat](https://windirstat.net/download.html) view of the game's files. The executable was built for Linux Mint, and compressed with UPX. UPX has a long history in the world of demoscene, and works by compressing your program with a thin deflate wrapper that is unpacked at runtime. It has some downsides, in particular we found that Windows antivirus tries hard to prevent the user from executing a program like this, but in the case of a gamejam or demoscene submission, this is forgivable.

![](/img/wormhelsing-linuxmint-windirstat.png)

As you can see, our exe was the largest component, followed by music. Some of the smaller submissions were able to exploit system resources, like SDL2, which comes preinstalled on Linux Mint, or Win32 for Windows. While I was very pleased with the size of our raylib binary, if we wanted to hit the sub-100KiB tiers, we would reconsider it for a library that could use one of these preinstalled dependencies. Some of the submissions got quite creative with their use of system dependencies, such as using a lib that uses the system web view, or a submission that relied on the system image viewer opened in a 2nd window.

## Takeaways

- Creating a game from scratch is really fun! If you've ever thought about it, I would recommend having a shot at a simple game you are confident you can ship.
- UPX is helpful for cutting size by 25-60%, but it comes with security tradeoffs that make for a questionable tradeoff for serious apps.
- Foundational dependencies you didn't write can far outweigh everything else you do write, for a timeboxed endeavor like this. We went in knowing the raylib dependency alone would be larger than some of the other submissions, and for us, it was worth it given our relative lack of experience shipping a full game.
- Raylib was a joy to use, and I never got stuck on any API rough edge at any point. I very rarely even needed google, since reading the headers was enough - I wrote a good chunk of the game while offline in nature.

---

*5-31-25*