'use strict'

const test = require('ava')

const { set } = require('../localpack')

const { SET_UNSET_DATA, testCommand } = require('./helpers')

SET_UNSET_DATA.forEach(([arg, ...args]) =>
  // eslint-disable-next-line max-nested-callbacks
  test(`should set ${arg} with ${args.join(' ')}`, t =>
    testCommand({ t, func: set, command: 'set', args: [arg, ...args] })),
)