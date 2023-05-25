var database = require("../database/config")

function getCurtida(idUsuario, idPersonagem) {
    var instrucao = `
        select count(*) from tb_curtida where fk_usuario = ${idUsuario} and fk_personagem = ${idPersonagem};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    getCurtida
};