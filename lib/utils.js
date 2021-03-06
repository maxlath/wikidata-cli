const fs = require('fs')
const path = require('path')

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

const sum = (a, b) => a + b

const average = values => {
  if (values.length > 0) return values.reduce(sum, 0) / values.length
  else return 0
}

const getAbsoluteFilePath = filepath => path.resolve(process.cwd(), filepath)

const isFilePathSync = arg => {
  const possibleFilePath = getAbsoluteFilePath(arg)
  return fs.existsSync(possibleFilePath)
}

module.exports = { wait, average, isFilePathSync, getAbsoluteFilePath }
