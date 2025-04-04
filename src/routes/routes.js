const express = require('express')
const router = express.Router();

const contatosController= require ('../controllers/contatos');
const usuariosController= require ('../controllers/usuarios');
const empresasController= require ('../controllers/empresa');

router.get('/contatos', contatosController.listarContatos);
router.post('/contatos', contatosController.cadastrarContatos);
router.patch('/contatos', contatosController.editarContatos);
router.delete('/contatos', contatosController.apagarContatos);




router.get('/usuarios', usuariosController.listarUsuarios);
router.post('/usuarios', usuariosController.cadastrarUsuarios);
router.patch('/usuarios', usuariosController.editarUsuarios);
router.delete('/usuarios', usuariosController.apagarUsuarios);




router.get('/empresas', empresasController.listarEmpresa);
router.post('/empresas', empresasController.cadastrarEmpresa);
router.patch('empresas', empresasController.editarEmpresa);
router.delete('/empresas', empresasController.apagarEmpresa);

module.exports = router;