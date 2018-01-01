'use strict'

const { unaryMap } = require('../helpers')
const { NODES_MAP } = require('../nodes')
const { mapValues } = require('../utils')

// Fill permissions with `-` for all omitted permissions
// E.g. `a+x` -> `a+x,a-rwst` -> `a=x`
const fullMap = function(nodesMap) {
  return { ...EMPTY_NODES_MAP, ...nodesMap }
}

const getEmptyNodesMap = function() {
  return mapValues(NODES_MAP, getEmptyNode)
}

const getEmptyNode = function({ category, permission }) {
  return { category, permission, add: false }
}

const EMPTY_NODES_MAP = getEmptyNodesMap()

const full = unaryMap.bind(null, fullMap)

module.exports = {
  full,
}