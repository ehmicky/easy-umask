import test from 'ava'
import testEach from 'test-each'

import { max } from '../src/main.js'

import { callCli } from './helpers/cli.js'
import { BINARY_DATA } from './helpers/data/binary.js'
import { stringifyErrors } from './helpers/error.js'

const eMax = stringifyErrors(max)

testEach(BINARY_DATA, ({ title }, args) => {
  test(`max (JavaScript) | ${title}`, t => {
    t.snapshot(eMax(...args))
  })

  test(`max (CLI) | ${title}`, async t => {
    t.snapshot(await callCli('max', ...args))
  })
})
