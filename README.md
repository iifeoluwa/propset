# propset [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/iifeoluwa/propset/issues)
[![Build Status](https://travis-ci.org/iifeoluwa/propset.png?branch=master)](https://travis-ci.org/iifeoluwa/propset)

`propset` verifies that all the needed properties for your JavaScript objects are set

## Table of Contents

1. [Implementation](#implementation)
2. [Contributing](#contributing)
3. [License](#license)


## Implementation

### Installation
To install run `npm install propset`

### Usage
You can begin using propset once it has been installed and added to your script like so;

`const propset = require('propset')`

## Demo
```
const propset = require('propset')

let testObject = {
	firstName:"John", 
	lastName:"Doe", 
	age:50, 
	eyeColor:"blue"
}

if (propset(testObject)){
	console.log('All object properties are set.')
}
```

**[Back to top](#table-of-contents)**

## Contributing

PRs are welcome but kindly open an issue first to discuss potential changes/additions.

**[Back to top](#table-of-contents)**

## License

#### (The MIT License)

Copyright (c) 2014 Bill Gooch

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
        distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

        The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
        TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**[Back to top](#table-of-contents)**








