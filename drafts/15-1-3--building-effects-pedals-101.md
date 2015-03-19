building effects pedals 101
===

This post is adapted from a steam of consciousness gist I wrote a while back for a friend interested in building guitar effects pedals. It is imperfect and incomplete... exactly how a writeup on analog audio hacking should be ;)

**right off the bat:**
- start simple
- start with fuzz
- don't even bother looking at building an analog delay pedal yet :)


##Overview of electrical components:

###Resistors


http://en.wikipedia.org/wiki/Resistor

Resistors restrict the flow of electricity. The power of a resistor is measured in ohms. The more ohms, the less electricity flow.

![resistor](http://develissimo.com/media/images/productimage-picture-resistor-set-carbon-film-84.jpg)

###Potentiometers

http://en.wikipedia.org/wiki/Potentiometer

This is basically a resistor that can be turned up or down. They have a range of resistance that they can provide. A master volume knob is typically a potentiometer between the primary amp circuit and the speakers where 0 is enough ohms to completely cut the signal and 10 is the potentiometer completely turned off and providing no resistance.

![potentiometer](http://upload.wikimedia.org/wikipedia/commons/b/b5/Potentiometer.jpg)

###Capacitors

http://en.wikipedia.org/wiki/Capacitor

This is almost like a mini battery that releases its charge when full. A capacitor can "fill" at a regular rate, which allows them to be used for timers. A capacitor in an effects pedal or a synth would typically be used to smooth out a signal or provide the "pulse" of the audio.

![Capacitors](http://upload.wikimedia.org/wikipedia/commons/8/86/Photo-SMDcapacitors.jpg)

###Diodes

http://en.wikipedia.org/wiki/Diode

A diode is used to make electricity flow only one way down a wire. Diodes are sensitive to heat, so be careful with your soldering iron around these or you will fry them. Also, don't send signal down the wrong direction. That will also fry them.

![diodes](http://upload.wikimedia.org/wikipedia/commons/2/24/Zener_Diode.JPG)

###Transistors

http://en.wikipedia.org/wiki/Transistor

Transistors are used to amplify a signal. They always have 3 prongs. 1) the input signal (example: some audio from a guitar) 2) the control prong, which determines how much to amplify the signal and 3) the output signal.  Fuzz pedals exploit transistors by overloading them with way more electricity on the control prong than they are designed for, causing a "clipping effect". This effect can be seen on an oscilloscope. Here's an example of that: 

![http://home.polstra.com/amps/wreck1/scope/IMG_0691.jpg](http://home.polstra.com/amps/wreck1/scope/IMG_0691.jpg)

![transistor](http://www.tandyonline.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/c/bc635-transistor.png)

**I would highly recommend this as your first pedal/module:**

http://beavisaudio.com/bboard/projects/bbp_PWM.pdf 

![](http://www.hobby-hour.com/electronics/lm386-200.gif)

This is a LM386 fuzz pedal. It is extremely cheap to build (you could probably do it for under 10 bucks), and you can buy 100% of the parts from RadioShack (or "ratshack" as it is affectionately referred to by audio hackers), so you don't have to wait around to ship a 3 cent diode from Hong Kong when you **inevitably** fry one. It will probably take you about an afternoon to build.

##resources

Great site with kits and build breakdowns:

https://www.smallbearelec.com/HowTos/HowTos.html

I do not know how active this guy is anymore, but he is a total badass and his project page is great inspiration:

http://beavisaudio.com/projects/

BYOC, a site that focuses on providing schematics for building clones of popular pedals:

http://buildyourownclone.com/

---

*1-3-15*