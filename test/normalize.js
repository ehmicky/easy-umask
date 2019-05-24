import test from 'ava'

import { normalize } from '../src/main.js'

import { performTests } from './helpers/command.js'
import { removeInvalid, normalizeArg } from './helpers/check.js'
import { PARSE_DATA } from './helpers/data/parse/main.js'

performTests({
  title: ({ type, title }) => `[${type}] should normalize ${title}`,
  command: 'normalize',
  data: PARSE_DATA,
})

removeInvalid(PARSE_DATA).map(normalizeArg).forEach(datum => {
  test(`should have idempotent 'normalize' ${JSON.stringify(datum)}`, t => {
    const { arg } = datum
    t.deepEqual(arg, normalize(arg))
  })
})
