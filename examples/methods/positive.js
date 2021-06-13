// Demo of the `positive()` method in JavaScript.
// This file can be directly run:
//   - first install `unix-permissions`
//   - then `node node_modules/unix-permissions/examples/methods/positive.js`
// An online demo is also available at:
//   https://repl.it/@ehmicky/unix-permissions

'use strict'

const { positive, invert } = require('unix-permissions')

console.log(positive('o+x,o-rw')) // 'o+x'

console.log(positive('o=x')) // 'o+x'

console.log(positive('660')) // '+0660'

console.log(invert('660')) // '0117'

console.log(invert(positive('660'))) // '-0660'
