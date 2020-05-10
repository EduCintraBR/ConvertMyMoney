const app = require('./app')
const router = require('./node-server')
const convert = require('./lib/convert')
const apiCotacao = require('./lib/api-bcb')

router.get('/', async (req, res) => {
  const cotacaoApi = await apiCotacao.getCotacao() 
  res.render('home', { cotacaoApi })
})

router.get('/cotacao', (req, res) => {
  let { cotacao, quantidade } = req.query

  if (isNaN(parseFloat(cotacao)) == false && isNaN(parseFloat(quantidade)) == false) {
    cotacao = convert.replaceComma(cotacao)
    quantidade = convert.replaceComma(quantidade)
    const convertido = convert.converter(cotacao, quantidade)
    res.render('cotacao', {  
      error: false,
      cotacao: convert.toMoney(cotacao), 
      quantidade: convert.toMoney(quantidade), 
      convertido: convert.toMoney(convertido) 
    })
  } else {
    setTimeout(() => {
      res.redirect('/')
    }, 1500)
  }
})

app.iniciaServidor()