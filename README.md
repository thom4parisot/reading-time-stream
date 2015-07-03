# reading-time-stream

> Input a Stream text in, get a reading time out. A super fast Node.js Buffer-only reading time calculation.

# Install

```bash
npm i --save reading-time-stream
```

https://github.com/ngryman/reading-time

# Usage

This mode enables you to process large files with a flat memory consumption.
Because it does not convert into strings, it should also be decently faster, especially with large volumes of data.

```javascript
var readingTime = require('reading-time-stream');
var analyser = readingTime({ wordsPerMinutes: 200 });
var fs = require('fs');

fs.createReadStream('path/to/file.txt')
	.pipe(analyser)
	.pipe(process.stdout)
	.on('end', function(){
		console.log(analyser.stats);
	});
```

The `analyser.stats` object will print the following data structure:

```js
{ chars: 11, spaces: 2, words: 3, time: 900 }
```

`time` is expressed in *milliseconds*.

# License

> Copyright © 2015 Thomas Parisot, https://oncletom.io
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
