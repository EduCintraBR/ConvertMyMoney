const app = require('./app')
const router = require('./config/server')
const convert = require('./lib/convert')

app.iniciaServidor()

router.get('/', (req, res) => {
  res.render('home')
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
    res.render('cotacao', {
      error: 'Valores inválidos, tente novamente!'
    })
  }
})