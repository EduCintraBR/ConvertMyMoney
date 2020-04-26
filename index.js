const express = require('express')
const app = express()
const path = require('path')
const convert = require('./lib/convert')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/cotacao', (req, res) => {
  let { cotacao, quantidade } = req.query

  if (cotacao && quantidade) {
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

app.listen(3000, (err) => {
  if (err) {
    console.log('Não foi possível iniciar o servidor');
  } else {
    console.log('ConvertMyMoney is online');
  }
})