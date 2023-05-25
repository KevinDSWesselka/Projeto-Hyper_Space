var database = require("../database/config")

function getCurtida(idUsuario, idPersonagem) {
    var instrucao = `
        select count(*) as curtidas from tb_curtida where fk_usuario = ${idUsuario} and fk_personagem = ${idPersonagem};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function postCurtida(idUsuario, idPersonagem) {
    var instrucao = `
    INSERT INTO tb_curtida (fk_personagem, fk_usuario, dt_curtida) VALUES (${idPersonagem}, ${idUsuario}, now()) 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    getCurtida,
    postCurtida
};