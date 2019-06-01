'use strict'

const crossModule = require('..')

beforeEach(() => {
  delete process.env.SET_ENV
})

it('set env', () => {
  crossModule(['test/fixtures/set-env', 'node', 'test/fixtures/set-env'])
  expect(process.env.SET_ENV).toBe('2')
})

it('without command', () => {
  crossModule(['test/fixtures/set-env'])
  expect(process.env.SET_ENV).toBeUndefined()
})
