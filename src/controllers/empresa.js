const db = require('../database/connection');

module.exports = {
   async listarEmpresas(request, response) {
      try {
         return response.status(200).json({

            sucesso: true,
            mensagem: 'lista de empresas',
            dados: null

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            mensagem: 'erro na listagem de empresas',
            dados: error.message
         })
      }
   },




   async cadastrarEmpresas(request, response) {
      try {
         return response.status(200).json({

            sucesso: true,
            mensagem: 'cadastro de empresas',
            dados: null

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            mensagem: 'erro no cadastro de empresa',
            dados: error.message
         })
      }
   },




   async editarEmpresas(request, response) {
      try {
         return response.status(200).json({

            sucesso: true,
            mensagem: 'editar empresa',
            dados: null

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            mensagem: 'erro ao editar empresa',
            dados: error.message
         })
      }
   },




   async apagarEmpresas(request, response) {
      try {
         return response.status(200).json({

            sucesso: true,
            mensagem: 'apagar empresa',
            dados: null

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            mensagem: 'erro ao apagar empresa',
            dados: error.message
         })
      }
   },
}