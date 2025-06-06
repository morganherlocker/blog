Raw bin
===

## The Problem with protobuf

I'll let Google describe the protobuf format:

> Protocol buffers are Google’s language-neutral, platform-neutral, extensible mechanism for serializing structured data – think XML, but smaller, faster, and simpler. You define how you want your data to be structured once, then you can use special generated source code to easily write and read your structured data to and from a variety of data streams and using a variety of languages.

This is a compelling elevator pitch. Because protobuf stores schema data out of band from the data itself (unlike self-describing formats like JSON), data stored or sent over the wire does not include bloat from headers/field names/etc.

The downsides come in a few well-documented forms (not streamable, etc.), but I think the biggest issues are overlooked and unaddressed by alternatives:

1. The generated code is large, and includes hundreds of thousands of lines from stdlib + many google libraries. This hurts compile times in a monorepo.
2. The format encourages array-of-structs style protocols to emerge.
3. It is non-trivial to write an alternative parser or serializer, due to unnecessary and complex features such as runtime reflection, nested data, etc.

### Code size

Let's take a common example of a data schema:

```proto
syntax = "proto3";
message LonLat {
  float lon = 1;
  float lat = 2;
}
```

This proto generates **584 lines of C++, links to 173k lines of dependencies, and generates a 21Kb object file** when compiled with `clang++@14.0.0-1ubuntu1.1`.

While the serialized data itself is only several bytes, the bindings to the generated parser outweigh the size of the payload, and are 2,625 times larger than the data we're trying to transmit for a single coordinate. At scale, the size of our data should far outweigh the size of the parser, but this adds up quickly when it comes to compile times and image sizes.

Do we need nearly 200k lines of code to parse two floats?

## Raw binary data

Perhaps we don't need a parser at all. What if instead, we defined a lonlat protocol in a readme file that said something like this?

> *LonLat file spec:*
>  - *Each file represents a list of strided lon, lat points.*
>  - *All even values are lon, all odd values are lat.*
>  - *The data type is 4 byte float.*

A parser can now be written trivially, if we even want to call it a parser. It's just data.

```js
const coords = new Float32Array(fs.readFileSync('./lonlat.bin'));
for (let idx = 0; idx < coords.length; idx++) {
    const lon = coords[0];
    const lat = coords[1];
    console.log(`coordinate: ${lon}, ${lat}`);
}
```

### Benefits

We can confidently say that this "parser" can handle 1M+ coordinates at real-time visualization speeds in a browser, and 100M+ at ~1hz. There is no more efficient parser that could be written for simple coordinates in a browser without domain-specific compression tricks. Alternatives, including many uses of protobuf in clients, instead allocate memory into objects per item, which is considerably slower.

What's more, since the memory model is so simple with struct-of-arrays, we can easily estimate how much memory our programs will use with napkin math about the domain limits.


### Cross language "support"

Outside a browser, our data format is also trivial to parse in any other language, because nearly every language has primitive support for parsing binary arrays of data quickly. For example, here's python:

```python
coords = numpy.fromfile('./lonlat.bin')
```

---

*3-28-25*
