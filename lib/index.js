'use strict'

const fs = require('fs')
const path = require('path')
const spawn = require('cross-spawn')

module.exports = args => {
  const [filename, command, ...commandArgs] = args

  if (!command) {
    return null
  }

  const filepath = path.resolve(filename)
  if (fs.existsSync(filepath)) {
    console.log(__dirname)
    require(filepath)
  }
  const cp = spawn(command, commandArgs, { stdio: 'inherit' })
  return cp
}
