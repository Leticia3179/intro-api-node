const express = require('express')
const router = express.Router();

const contatosController= require ('../controllers/contatos');
const contatosController= require ('../controllers/usuarios');

router.get('/contatos', contatosController.listarContatos);
router.post('/contatos', contatosController.cadastarContatos);
router.patch('/contatos', contatosController.editarContatos);
router.delete('/contatos', contatosController.apagarContatos);




router.get('/usuarios', contatosController.listarContatos);
router.post('/usuarios', contatosController.cadastarContatos);
router.patch('/usuarios', contatosController.editarContatos);
router.delete('/usuarios', contatosController.apagarContatos);




module.exports = router;