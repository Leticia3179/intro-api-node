const express = require('express')
const router = express.Router();

const contatosController= require ('../controllers/contatos');

router.get('/contatos', contatosController.listarContatos);

module.exports = router;