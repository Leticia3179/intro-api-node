const db = require('../database/connection');

module.exports = {
   async listarUsuarios(request, response) {
      try {


         const sql = `
         SELECT
            usu_id, emp_id, usu_nome, usu_email, usu_senha 
         FROM USUARIOS`;

              const [row] =await db.query(sql);
         const nItens = row.length;
              

         return response.status(200).json({

            sucesso: true,
            mensagem: 'lista de usuarios',
            dados: null,
            nItens,
            dados: row


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
            dados: dados

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            mensagem: 'erro na requesição',
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