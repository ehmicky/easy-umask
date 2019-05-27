import test from 'ava'
import testEach from 'test-each'

import { equal } from '../src/main.js'

import { callCli } from './helpers/cli.js'
import { VALID_PARSE_DATA } from './helpers/data/full/main.js'
import { BINARY_DATA } from './helpers/data/binary.js'
import { stringifyErrors } from './helpers/error.js'

const eEqual = stringifyErrors(equal)

testEach(BINARY_DATA, ({ title }, args) => {
  test(`equal (JavaScript) | ${title}`, t => {
    t.snapshot(eEqual(...args))
  })

  test(`equal (CLI) | ${title}`, async t => {
    t.snapshot(await callCli('equal', ...args))
  })
})

testEach(VALID_PARSE_DATA, ({ title }, arg) => {
  test(`equal (self) | ${title}`, t => {
    t.true(equal(arg, arg))
  })
})
