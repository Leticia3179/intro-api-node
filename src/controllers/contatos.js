const db = require('../database/connection');

module.exports = {
   async listarContatos(request, response) {
      try {
         return response.status(200).json({

            sucesso: true,
            mensagem: 'lista de contatos',
            dados: null

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            mensagem: 'erro na listagem de Contato',
            dados: error.message
         })
      }
   },




   async cadastarContatos(request, response) {
      try {
         return response.status(200).json({

            sucesso: true,
            mensagem: 'cadastro de contato',
            dados: null

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            mensagem: 'erro no cadastro de Contato',
            dados: error.message
         })
      }
   },




   async editarContatos(request, response) {
      try {
         return response.status(200).json({

            sucesso: true,
            mensagem: 'editar contato',
            dados: null

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            mensagem: 'erro ao editar Contato',
            dados: error.message
         })
      }
   },




   async apagarContatos(request, response) {
      try {
         return response.status(200).json({

            sucesso: true,
            mensagem: 'apagar contato',
            dados: null

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            mensagem: 'erro ao apagar contato',
            dados: error.message
         })
      }
   },
}