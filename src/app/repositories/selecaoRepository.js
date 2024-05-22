import {consulta} from "../database/conexao.js";

class selecaoRepository {

  create(selecao){
    const sql = 'INSERT INTO selecoes SET ?';
     return consulta(sql,selecao,'Não foi possivel Cadastrar!!!');
   
  }
  findAll(){
    const sql = 'SELECT * FROM selecoes';
    return consulta(sql,'Não foi possivel encontrar!!!');
  }
  findById(id){
    const sql = 'SELECT * FROM selecoes WHERE id=?';
      return consulta(sql,id,'Não foi possivel encontrar!!!')

  }
  update(selecao,id){
    const sql = 'UPDATE selecoes SET ? WHERE id=?';
    return consulta(sql,[selecao,id],'Não foi possivel alterar!!!')
  }
  delete(id){
    const sql = 'DELETE FROM selecoes WHERE id=?';
    return consulta(sql,id,'Não foi possivel Deletar!!')
  }

}
export default new selecaoRepository();