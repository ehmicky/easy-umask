import { not } from '../src/main.js'

import { performTests } from './helpers/command.js'
import { performCheck, normalizeData } from './helpers/check.js'
import { PARSE_DATA } from './helpers/data/parse/main.js'
import { SIMPLE_DATA } from './helpers/data/simple.js'

performTests({
  title: args => `should negate ${args}`,
  command: 'not',
  data: SIMPLE_DATA,
})

normalizeData(PARSE_DATA).forEach(datum => {
  const title = `should have idempotent 'not' ${JSON.stringify(datum)}`
  performCheck(
    {
      title,
      check: ({ t, arg }) => t.deepEqual(arg, not(not(arg))),
    },
    datum,
  )
})
