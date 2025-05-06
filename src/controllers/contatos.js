const db = require('../database/connection');

module.exports = {
   async listarContatos(request, response) {

      try {


         const sql = `
         SELECT
            cont_id, emp_id, cont_tipo, cont_desc 
         FROM CONTATO`

         const [row] =await db.query(sql);
         const nItens = row.length;


         return response.status(200).json({

            sucesso: true,
            mensagem: 'lista de contatos',
            dados: null,
            nItens,
            dados: row

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




   async cadastrarContatos(request, response) {
      try {

                const { emp_id, cont_tipo, cont_desc } = request.body;
    
                const sql = `
                    INSERT INTO contatos (emp_id, cont_tipo, cont_desc))
                    VALUES (?, ?, ?)
                `;
    
                const values = [emp_id, cont_tipo, cont_desc];
                const [result] = await db.query(sql, values);
    
                const dados = {
                  id: result.insertId,
                  cont_tipo, 
                  cont_desc
                };
    



         return response.status(200).json({

            sucesso: true,
            mensagem: 'cadastro de contato',
            dados: dados

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