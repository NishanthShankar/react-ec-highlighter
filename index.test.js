const getParts = require('./index')

test('return null for empty string', () => {
  expect(getParts()).toBe(null)
})

test('return text object as is for empty highlight text', () => {
  expect(getParts('test')).toStrictEqual([{ text: 'test', match: false }])
})

test('return text object as is for no match', () => {
  expect(getParts('test', 'rest')).toStrictEqual([
    { text: 'test', match: false }
  ])
})

test('return text object for matching highlight text', () => {
  expect(getParts('test', 'test')).toStrictEqual([
    { text: 'test', match: true }
  ])
})

test('return text object for case changed highlight text', () => {
  expect(getParts('test', 'TEST')).toStrictEqual([
    { text: 'test', match: true }
  ])
})

test('return text object for random case highlight text', () => {
  expect(getParts('test', 'TesT')).toStrictEqual([
    { text: 'test', match: true }
  ])
})

test('return text object for substring match', () => {
  expect(getParts('testing', 'test')).toStrictEqual([
    { text: 'test', match: true },
    { text: 'ing', match: false }
  ])
})

test('return text object for middle match', () => {
  expect(getParts('retesting', 'test')).toStrictEqual([
    { text: 're', match: false },
    { text: 'test', match: true },
    { text: 'ing', match: false }
  ])
})

test('return two object for two matches', () => {
  expect(getParts('testing testing', 'test')).toStrictEqual([
    { text: 'test', match: true },
    { text: 'ing ', match: false },
    { text: 'test', match: true },
    { text: 'ing', match: false }
  ])
})

// styles is null
// styles is not object
