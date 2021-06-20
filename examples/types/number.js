// Demo of the `number` permission type in JavaScript.
// This file can be directly run:
//   - first install `unix-permissions`
//   - then `node node_modules/unix-permissions/examples/types/number.js`
// An online demo is also available at:
//   https://repl.it/@ehmicky/unix-permissions

import { convert } from 'unix-permissions'

console.log(convert.stat(0)) // '---------'

console.log(convert.stat(1)) // '--------x'

console.log(convert.stat(3)) // '-------wx'

console.log(convert.stat(8)) // '-----x---'

console.log(convert.stat(512)) // '--------T'
