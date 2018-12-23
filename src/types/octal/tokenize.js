'use strict'

const tokenize = function(octal) {
  if (typeof octal !== 'string') {
    return {}
  }

  const tokens = OCTAL_REGEXP.exec(octal)

  if (tokens === null) {
    return {}
  }

  const [, operator, string] = tokens

  const operatorA = addDefaultOperator({ operator })
  return { operator: operatorA, string }
}

const OCTAL_REGEXP = /^([=+-]?)\\?0?[oO]?([0-7]{1,4})$/gu

const addDefaultOperator = function({ operator }) {
  if (operator === '') {
    return DEFAULT_OPERATOR
  }

  return operator
}

const DEFAULT_OPERATOR = '+'

module.exports = {
  tokenize,
}