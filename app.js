const app = require('./config/server')

const iniciaServidor = () =>{
  app.listen(3000, (err) => {
    if (err) {
      console.log('Não foi possível iniciar o servidor');
    } else {
      console.log('ConvertMyMoney is online');
    }
  })
}
module.exports = { iniciaServidor }