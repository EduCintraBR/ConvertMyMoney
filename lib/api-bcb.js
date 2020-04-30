const axios = require('axios')
const datetime = require('./datetime')

const dataAtual = datetime.getCurrentDate()

const getUri = data => `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${data}'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`

const getApiBcb = (dataAtual) => axios.get(getUri(dataAtual))
const extractCotacao = res => res.data.value[0]
const getCotacao = async() => {
  const resApi = await getApiBcb(dataAtual)
  const cotacao = extractCotacao(resApi)
  return cotacao
}

module.exports = { getApiBcb,
                   extractCotacao,
                   getCotacao }

                   