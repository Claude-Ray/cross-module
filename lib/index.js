'use strict'

const path = require('path')
const spawn = require('cross-spawn')

module.exports = args => {
  const [filename, command, ...commandArgs] = args

  if (!command) {
    return null
  }

  const filepath = path.resolve(filename)
  require(filepath)

  const cp = spawn(command, commandArgs, { stdio: 'inherit' })
  return cp
}
