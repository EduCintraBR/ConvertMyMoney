const convert = require('./convert')

test('converter cotacao 6 quantidade 100', () => {
  expect(convert.converter(6, 100)).toBe(600)
})

test('converter cotacao 5,74 quantidade 100', () => {
  expect(convert.converter(5.74, 100)).toBe(574)
})

test('toMoney converte para float', () => {
  expect(convert.toMoney(5)).toBe('5.00')
})

test('replaceComma substitui a virgula por ponto', () => {
  expect(convert.replaceComma('5,78')).toBe(5.78)
})