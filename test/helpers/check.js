// eslint-disable-next-line ava/no-ignored-test-files
import test from 'ava'

import { normalize } from '../../src/main.js'

// Performs a `check` test function
export const performCheck = function({ title, check }, datum) {
  test(title, t => check({ t, ...datum }))
}

export const normalizeData = function(data) {
  return data.map(normalizeArg).filter(value => value !== undefined)
}

const normalizeArg = function({ args: [arg], ...datum }) {
  try {
    const argA = normalize(arg)
    return { ...datum, arg: argA }
  } catch {}
}
