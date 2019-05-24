// eslint-disable-next-line import/no-namespace
import * as unixPermissions from '../../src/main.js'
import { getCommand } from '../../src/bin/command.js'

import { testCli } from './cli.js'

// Snapshot a command's output, then test it has the same behavior when fired
// from CLI.
export const testCommand = async function({ datum, command, t }) {
  const args = getArgs({ datum })

  const { output, error } = fireCommand({ command, args })

  t.snapshot({ output, error })

  await testCli({ t, output, error, command, args })
}

const getArgs = function({ datum }) {
  if (Array.isArray(datum)) {
    return datum
  }

  if (typeof datum === 'object' && datum !== null) {
    return [datum.arg]
  }

  return [datum]
}

// Fire command programmatically
const fireCommand = function({ command, args }) {
  const func = getCommand({ unixPermissions, command })

  try {
    const output = func(...args)
    return { output, error: false }
  } catch (error) {
    const output = error.message
    return { output, error: true }
  }
}
