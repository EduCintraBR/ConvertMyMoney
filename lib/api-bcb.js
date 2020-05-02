const axios = require('axios')
const datetime = require('./datetime')

const dataAtual = datetime.getCurrentDate()

const getUri = data => `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${data}'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`

const getApiBcb = (dataAtual) => axios.get(getUri(dataAtual))
const extractCotacao = res => res.data.value[0]

const getCotacao = async() => {
  try {
    const resApi = await getApiBcb(dataAtual)
    const cotacao = extractCotacao(resApi)
    if (cotacao === undefined){
      return false
    } else {
      return cotacao
    }
  } catch (error) {
    console.log('Erro -> ', error)
    return false
  }
}

module.exports = { getApiBcb,
                   extractCotacao,
                   getCotacao }

                   