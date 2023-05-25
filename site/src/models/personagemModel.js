var database = require("../database/config")

function pegarPersonagens() {
    var instrucao = `
        SELECT * FROM tb_personagem;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    pegarPersonagens
};