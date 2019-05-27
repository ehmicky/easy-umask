import test from 'ava'
import testEach from 'test-each'

import { invert } from '../src/main.js'

import { callCli } from './helpers/cli.js'
import { UNARY_DATA } from './helpers/data/unary.js'
import { stringifyErrors } from './helpers/error.js'

const eInvert = stringifyErrors(invert)

testEach(UNARY_DATA, ({ title }, arg) => {
  test(`invert (JavaScript) | ${title}`, t => {
    t.snapshot(eInvert(arg))
  })

  test(`invert (CLI) | ${title}`, async t => {
    t.snapshot(await callCli('invert', arg))
  })
})
