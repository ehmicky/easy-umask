import test from 'ava'
import testEach from 'test-each'

import { convert, normalize, type as getType } from '../src/main.js'

import { TYPES } from './helpers/data/types.js'
import { VALID_PARSE_DATA } from './helpers/data/full/main.js'

// Conversion between some types loses information
const isLossy = function(type, otherType) {
  return LOSSY_CONVERSIONS.some(
    ([typeA, otherTypeA]) => typeA === type && otherTypeA === otherType,
  )
}

const LOSSY_CONVERSIONS = [
  ['symbolic', 'number'],
  ['symbolic', 'stat'],
  ['symbolic', 'octal'],
  ['object', 'number'],
  ['object', 'stat'],
  ['object', 'octal'],
  ['octal', 'number'],
  ['octal', 'stat'],
]

testEach(TYPES, VALID_PARSE_DATA, ({ title }, otherType, arg) => {
  const type = getType(arg)

  if (isLossy(type, otherType)) {
    return
  }

  test(`convert (idempotence) | ${title}`, t => {
    t.deepEqual(normalize(arg), convert[type](convert[otherType](arg)))
  })
})
