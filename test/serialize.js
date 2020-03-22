import test from 'ava'
import { each } from 'test-each'

import { convert } from '../src/main.js'

import { callCli } from './helpers/cli.js'
import { UNARY_DATA } from './helpers/data/unary.js'
import { TYPES } from './helpers/data/types.js'

each(TYPES, UNARY_DATA, ({ title }, type, arg) => {
  test(`serialize (JavaScript) | ${title}`, (t) => {
    t.snapshot(convert[type](arg))
  })

  test(`serialize (CLI) | ${title}`, async (t) => {
    t.snapshot(await callCli(`convert.${type}`, arg))
  })
})
