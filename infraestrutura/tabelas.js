// This class is responsible for creating the table Tabelas in the database if it dosn't already exist.
class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarAtendimentos();
    }

    criarAtendimentos() {
        const query = 'CREATE TABLE IF NOT EXISTS Atendimentos(id int PRIMARY KEY AUTO_INCREMENT NOT NULL, cliente varchar(50) NOT NULL, pet varchar(20) NOT NULL, servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes TEXT);'

        this.conexao.query(query, (erro) => {
            if(erro) {
                console.log(erro);
            } else {
                console.log("tabelas.js: Tabela Atendimentos criada com sucesso");
            }
        })
    }
}

module.exports = new Tabelas