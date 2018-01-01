'use strict'

const execa = require('execa')
const isCi = require('is-ci')

const BINARY_PATH = `${__dirname}/../../localpack/bin/unix_permissions.js`

// Test that CLI output and exit code is same as programmatic output and
// exception throwing
const testCli = async function({ t, output, error, command, args }) {
  // We only run this in CI because it's slow.
  if (!isCi || !args.some(isValidCliArgument)) {
    return
  }

  const { stdout, stderr, code } = await fireBinary(command, ...args)

  const { output: outputA, error: errorA } = normalizeOutput({ output, error })

  checkNonError({ t, output: outputA, error: errorA, code, stdout, stderr })
  checkError({ t, output: outputA, error: errorA, code, stdout, stderr })
}

// Ignore argument if it is not parsable by CLI
const isValidCliArgument = function(arg) {
  return typeof arg === 'string' && arg.trim() !== ''
}

// Fire CLI command
const fireBinary = async function(command, ...args) {
  const { stdout, stderr, code } = await execa(
    BINARY_PATH,
    [command, ...args],
    { reject: false },
  )

  const stdoutA = stdout.trim()
  const stderrA = stderr.trim()
  return { stdout: stdoutA, stderr: stderrA, code }
}

const normalizeOutput = function({ output, error }) {
  if (typeof output === 'boolean') {
    return { output: '', error: !output }
  }

  const outputA = serializeOutput({ output })
  return { output: outputA, error }
}

const serializeOutput = function({ output }) {
  if (typeof output === 'string') {
    return output
  }

  return JSON.stringify(output)
}

// Assertion checks if the error did not throw
const checkNonError = function({ t, output, error, code, stdout, stderr }) {
  if (error) {
    return
  }

  t.is(code, 0)
  t.is(stdout, output)
  t.is(stderr, '')
}

// Assertion checks if the error threw
const checkError = function({ t, output, error, code, stdout, stderr }) {
  if (!error) {
    return
  }

  t.is(code, 1)
  t.is(stdout, '')
  // CLI is stricter than programmatic usage for arguments length validation.
  // I.e. error message might differ there
  t.true(stderr === output || stderr.includes(CLI_ARGS_ERROR))
}

const CLI_ARGS_ERROR = 'Not enough non-option arguments'

module.exports = {
  testCli,
}