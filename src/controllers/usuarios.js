const db = require('../database/connection');

module.exports = {
   async listarUsuarios(request, response) {
      try {
         return response.status(200).json({

            sucesso: true,
            mensagem: 'lista de usuarios',
            dados: null

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            mensagem: 'erro na listagem de usuario',
            dados: error.message
         })
      }
   },




   async cadastrarUsuarios(request, response) {
      try {
         return response.status(200).json({

            sucesso: true,
            mensagem: 'cadastro de usuario',
            dados: null

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            mensagem: 'erro no cadastro de usuario',
            dados: error.message
         })
      }
   },




   async editarUsuarios(request, response) {
      try {
         return response.status(200).json({

            sucesso: true,
            mensagem: 'editar usuario',
            dados: null

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            mensagem: 'erro ao editar usuario',
            dados: error.message
         })
      }
   },




   async apagarUsuarios(request, response) {
      try {
         return response.status(200).json({

            sucesso: true,
            mensagem: 'apagar usuario',
            dados: null

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            mensagem: 'erro ao apagar usuario',
            dados: error.message
         })
      }
   },
}