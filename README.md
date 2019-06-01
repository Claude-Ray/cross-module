# cross-module

[![Build Status](https://travis-ci.org/Claude-Ray/cross-module.svg?branch=master)](https://travis-ci.org/Claude-Ray/cross-module)
[![codecov](https://codecov.io/gh/Claude-Ray/cross-module/branch/master/graph/badge.svg)](https://codecov.io/gh/Claude-Ray/cross-module)

This package can help you transform invasive modules into non-invasive, with cross-platform support.

# Installation
```sh
npm install --save-dev cross-module
```

# Why
There are too many intrusive SDKs I need to import.

For example, most of APM (application performance management) agents are invasive. You have to import `apm` in the first line of code.

```js
// invasive code
require('apm')

// your code
console.log('cross-module')
```

Is there a way to remove the invasive importation?

```js
// your code
console.log('cross-module')
```

# Usage

Just add `cross-mod ${moduleName/modulePath}` to npm scripts.

```json
{
  "start": "cross-mod apm cross-env NODE_ENV=production node index.js"
}
```

If you need custom features，add `${moduleConfigFileName}.js` to your directory.
```js
require('apm')({
  // options
})
```
