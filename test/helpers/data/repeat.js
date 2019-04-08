import { convert } from '../../../src/main.js'

// Iterate different data over each `type`
export const forEachDataType = function(allData) {
  return Object.entries(allData).flatMap(([type, data]) =>
    addType({ data, type }),
  )
}

// Iterate same data over each `type`
export const forEachType = function(data) {
  return Object.keys(convert).flatMap(type => addType({ data, type }))
}

const addType = function({ data, type }) {
  return data.map(args => addEachType({ type, args }))
}

const addEachType = function({ type, args }) {
  // When using `forEachType()` several times
  if (args && args.type !== undefined) {
    return { ...args, otherType: type }
  }

  return { type, args: [args], title: stringify(args) }
}

// Stringify test titles, ensuring their uniqueness
const stringify = function(value) {
  if (typeof value !== 'object') {
    return String(value)
  }

  return JSON.stringify(value)
}
