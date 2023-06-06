var database = require("../database/config")

function getCurtida(idPersonagem) {
    var instrucao = `
        select count(*) as curtidas from tb_curtida where fk_personagem = ${idPersonagem};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function likeOrDeslike(idUsuario, idPersonagem) {
    var instrucao = `
    update tb_curtida set curtiu = false where fk_usuario = ${idUsuario} and fk_personagem = ${idPersonagem};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function postCurtida(idUsuario, idPersonagem) {
    var instrucao = `
    INSERT INTO tb_curtida (fk_personagem, fk_usuario, ultima_att, curtiu) VALUES (${idPersonagem}, ${idUsuario}, now(), true) 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    getCurtida,
    postCurtida,
    likeOrDeslike
};