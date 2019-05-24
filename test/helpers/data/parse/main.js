import { normalize } from '../../../../src/main.js'

import { octal } from './octal.js'
import { number } from './number.js'
import { stat } from './stat.js'
import { symbolic } from './symbolic.js'
import { object } from './object.js'

const getParseData = function() {
  return Object.entries(PARSE_DATA_MAP).flatMap(([type, data]) =>
    data.map(arg => ({ type, arg })),
  )
}

const PARSE_DATA_MAP = { number, octal, stat, symbolic, object }

export const PARSE_DATA = getParseData()

export const isValid = function({ arg }) {
  try {
    normalize(arg)
    return true
  } catch {
    return false
  }
}

export const VALID_PARSE_DATA = PARSE_DATA.filter(isValid)
