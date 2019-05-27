import test from 'ava'

import { min } from '../src/main.js'

import { testCli } from './helpers/cli.js'
import { MIN_MAX_DATA } from './helpers/data/min_max.js'
import { stringifyErrors } from './helpers/error.js'

const eMin = stringifyErrors(min)

MIN_MAX_DATA.forEach(args => {
  test(`min (JavaScript) ${JSON.stringify(args)}`, t => {
    t.snapshot(eMin(...args))
  })

  test(`min (CLI) ${JSON.stringify(args)}`, t =>
    testCli({ args, command: 'min', t }))
})
