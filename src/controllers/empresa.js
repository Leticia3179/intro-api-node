const db = require('../database/connection');

module.exports = {
   async listarEmpresas(request, response) {
      try {


         const sql = `
         SELECT
            emp_id, emp_nome, emp_cnpj, emp_cel, emp_end 
         FROM EMPRESA`;

         const [row] =await db.query(sql);
         const nItens = row.length;


         return response.status(200).json({

            sucesso: true,
            mensagem: 'lista de empresas',
            dados: null,
            nItens,
            dados: row,

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
         // Obtendo os dados do corpo da requisição
         const { emp_nome, emp_cnpj, emp_cel, emp_end } = request.body;
   
         // Validação dos campos obrigatórios
         if (!emp_nome || !emp_cnpj || !emp_cel || !emp_end) {
            return response.status(400).json({
               sucesso: false,
               mensagem: 'Campos obrigatórios ausentes: emp_nome, emp_cnpj, emp_cel, emp_end',
               dados: null
            });
         }
   
         // SQL para inserir os dados na tabela EMPRESA
         const sql = `
            INSERT INTO EMPRESA (emp_nome, emp_cnpj, emp_cel, emp_end)
            VALUES (?, ?, ?, ?)
         `;
   
         // Valores a serem inseridos na tabela
         const values = [emp_nome, emp_cnpj, emp_cel, emp_end];
         
         // Executa a query de inserção
         const [result] = await db.query(sql, values);
   
         // Dados que foram cadastrados
         const dados = {
            id: result.insertId,
            emp_nome,
            emp_cnpj,
            emp_cel,
            emp_end
         };
   
         // Resposta de sucesso com os dados cadastrados
         return response.status(201).json({
            sucesso: true,
            mensagem: 'Empresa cadastrada com sucesso',
            dados
         });
      } catch (error) {
         // Caso haja um erro na execução
         return response.status(500).json({
            sucesso: false,
            mensagem: 'Erro no cadastro da empresa',
            dados: error.message
         });
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