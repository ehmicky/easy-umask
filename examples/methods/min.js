// Demo of the `min()` method in JavaScript.
// This file can be directly run:
//   - first install `unix-permissions`
//   - then `node node_modules/unix-permissions/examples/methods/min.js`
// An online demo is also available at:
//   https://repl.it/@ehmicky/unix-permissions

import { min } from 'unix-permissions'

console.log(min('404', '440', '402')) // '0400'
