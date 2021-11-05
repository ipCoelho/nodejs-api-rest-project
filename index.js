// The file Index.js is supposed to do only the execution of the app, nothing else.
const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log("conectado com sucesso")

        Tabelas.init(conexao)
        const app = customExpress()
        
        app.listen(3000, () => console.log('index.js: servidor rodando na porta 3000'));
    }
})