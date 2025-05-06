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
         const { emp_id, usu_nome, usu_email, usu_senha } = request.body;
   
         // Validação dos campos obrigatórios
         if (!emp_id || !usu_nome || !usu_email || !usu_senha) {
            return response.status(400).json({
               sucesso: false,
               mensagem: 'Campos obrigatórios ausentes: emp_id, usu_nome, usu_email, usu_senha',
               dados: null
            });
         }
   
         // SQL para inserir os dados na tabela USUARIOS
         const sql = `
            INSERT INTO USUARIOS (emp_id, usu_nome, usu_email, usu_senha)
            VALUES (?, ?, ?, ?)
         `;
   
         // Valores a serem inseridos na tabela
         const values = [emp_id, usu_nome, usu_email, usu_senha];
   
         // Executa a query de inserção
         const [result] = await db.query(sql, values);
   
         // Dados que foram cadastrados
         const dados = {
            id: result.insertId,
            emp_id,
            usu_nome,
            usu_email,
            usu_senha  // Senha não é alterada, armazenada em texto puro
         };
   
         return response.status(201).json({
            sucesso: true,
            mensagem: 'Usuário cadastrado com sucesso',
            dados
         });
      } catch (error) {
         return response.status(500).json({
            sucesso: false,
            mensagem: 'Erro no cadastro do usuário',
            dados: error.message
         });
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