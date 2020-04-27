const app = require('./node-server')

const iniciaServidor = () =>{
  const PORT = process.env.PORT || 3000
  app.listen(PORT, (err) => {
    if (err) {
      console.log('Não foi possível iniciar o servidor');
    } else {
      console.log('ConvertMyMoney está ONLINE! na URL: http://locahost:3000');
    }
  })
}
module.exports = { iniciaServidor }