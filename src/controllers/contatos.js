const db = require('../database/connection');

module.exports = {
   async listarContatos (request, response) {
  try{
    return response.status(200).json({

        sucesso: true,
        mensagem:'lista de usuarios',
        dados: null

     })
      }

     catch (error){
         
     return response.status(500).json({

        sucesso: false,
        mensagem:'erro na listagem de usuarios',
        dados: error.message

     })

     }

    }

}