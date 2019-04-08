const { SPECIAL_PERMISSIONS } = require('../../constants')
const { NODES_MAP, getNodesMap } = require('../../nodes')

const { NO_PERMISSION } = require('./constants')
const { contractSpecial } = require('./tokenize')

// Serialize from `nodes` to a `stat` permission
const serialize = function(nodes) {
  const addedNodes = getAddedNodes({ nodes })

  const stat = Object.entries(NODES_MAP)
    .map(([nodeKey, node]) => serializeNode({ node, nodeKey, addedNodes }))
    .join('')
  // Special permissions are contracted into `x`
  const statA = contractSpecial(stat)
  return statA
}

// Get a `nodesMap` of the added permissions
const getAddedNodes = function({ nodes }) {
  const nodesA = nodes.filter(hasAdd)
  return getNodesMap(nodesA)
}

const hasAdd = function({ add }) {
  return add === true
}

// Returns either `-` or the permission character
const serializeNode = function({ node: { permission }, nodeKey, addedNodes }) {
  if (addedNodes[nodeKey] !== undefined) {
    return permission
  }

  // Special permissions are contracted into `x`
  if (SPECIAL_PERMISSIONS.includes(permission)) {
    return ''
  }

  return NO_PERMISSION
}

module.exports = {
  serialize,
}
