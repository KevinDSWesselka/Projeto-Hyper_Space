var curtidaModel = require("../models/curtidaModel");

function getCurtida(req, res) {
    var idUsuario = req.body.idUsuario;
    var idPersonagem = req.body.idPersonagem;
    curtidaModel.getCurtida(idUsuario, idPersonagem)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    getCurtida    
}