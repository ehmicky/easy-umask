'use strict'

// Retrieve main command, including dot notation like `convert.symbolic`
const getCommand = function({ unixPermissions, command }) {
  if (!command.includes('.')) {
    return unixPermissions[command]
  }

  const [namespace, commandA] = command.split('.')
  return unixPermissions[namespace][commandA]
}

module.exports = {
  getCommand,
}
