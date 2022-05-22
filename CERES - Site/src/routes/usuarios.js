var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrarAdm", function (req, res) {
    usuarioController.cadastrarAdm(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
    // usuarioController.nomeEmpresa(req, res);
});

//Autenticas Admin
router.post("/autenticarAdm", function (req, res) {
    usuarioController.entrarAdm(req, res);
});

module.exports = router;