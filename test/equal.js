import test from 'ava'

import { equal } from '../src/main.js'

import { testCommand } from './helpers/command.js'
import { VALID_PARSE_DATA } from './helpers/data/parse/main.js'
import { EQUAL_DATA } from './helpers/data/equal.js'

EQUAL_DATA.forEach(datum => {
  test(`equal() ${JSON.stringify(datum)}`, t =>
    testCommand({ datum, command: 'equal', t }))
})

VALID_PARSE_DATA.forEach(({ arg }) => {
  test(`equal() self ${JSON.stringify(arg)}`, t => {
    t.true(equal(arg, arg))
  })
})
