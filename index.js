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

  return spawn(command, commandArgs, { stdio: 'inherit' })
}
