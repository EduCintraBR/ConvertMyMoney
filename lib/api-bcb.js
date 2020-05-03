const axios = require('axios')
const datetime = require('./datetime')

//Funções
const getToday = () => datetime.getCurrentDate()
const getUrl = data => `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${data}%27&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`
const getApiBcb = url => axios.get(url)
const extractCotacao = res => res.data.value[0]

const getCotacao = ({ getToday , getUrl, getApiBcb, extractCotacao }) => async() => {
  try {
    const dataAtual = getToday()
    const url = getUrl(dataAtual) 
    const resApi = await getApiBcb(url)
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
                   getCotacao: getCotacao({ getToday, getUrl, getApiBcb, extractCotacao }),
                   getUrl,
                   getToday,
                   pure: {
                     getCotacao
                   }
                  }

                   