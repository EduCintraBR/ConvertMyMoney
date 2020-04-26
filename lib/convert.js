const converter = (cotacao, quantidade) => {
  return parseFloat(cotacao) * parseFloat(quantidade)
}

const toMoney = valor => {
  return parseFloat(valor).toFixed(2)
}

const replaceComma = valor => {
  valor = valor.replace(',', '.')
  return parseFloat(valor)
}

module.exports = { converter, toMoney, replaceComma }