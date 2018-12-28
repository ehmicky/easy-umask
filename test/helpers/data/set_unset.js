'use strict'

const SET_UNSET_DATA = [
  // Sets `+`
  ['o+x', 'o+x'],
  ['o+', 'o+x'],
  ['o-x', 'o+x'],

  // Sets `-`
  ['o+x', 'o-x'],
  ['o+', 'o-x'],
  ['o-x', 'o-x'],

  // Sets missing permission
  ['o+x', 'o+'],
  ['o+', 'o+'],
  ['o-x', 'o+'],

  // Equal operator
  ['o+', 'o=x'],
  ['a+', 'a=x'],
  ['a+', 'a=rwxst'],

  // Special permission
  ['o+', 'o+t'],
  ['o+t', 'o-t'],
  ['g+', 'g+s'],
  ['g+s', 'g-s'],
  ['u+', 'u+s'],
  ['u+s', 'u-s'],

  // Combining
  ['o+', 'o+x,o-r'],
  ['o-x,o+r', 'o+x,o-r'],
  ['o+x,o+r', 'o+x,o-r'],

  // Several arguments
  ['o+', 'o+x', 'o+r'],
  ['o+', 'o+x', 'o-r'],
  ['o+', 'o+x', 'o-x'],
]

module.exports = {
  SET_UNSET_DATA,
}
