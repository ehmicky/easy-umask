#!/usr/bin/env node
// This example demonstrates the `convert()` command in JavaScript.
// This file can be directly run:
//   - first install `unix-permissions`
//   - then `node node_modules/unix-permissions/examples/convert.js`

'use strict'

// The following line is only needed for this example.
// You should use `require('unix-permissions')` instead.
const unixPermissions = require('..')

const { convert, positive } = unixPermissions

const resultA = convert.symbolic('111') // 'a=x'

const resultB = positive(convert.symbolic('111')) // 'a+x'

const resultC = convert.octal('o+x') // '+0001'

const resultD = convert.octal('o=x') // '0001'

console.log(resultA)
console.log(resultB)
console.log(resultC)
console.log(resultD)
