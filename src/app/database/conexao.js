import mysql from 'mysql';

const conexao =mysql.createConnection({
  host:'localhost',
  port:'3306',
  user:'root',
  password: '9926',
  database: 'bd_copa'

});
conexao.connect();

/**
 * Executa codigo sql com ou sem valores
 * @param {*string} sql instruçao a ser executada
 * @param {*string=id | [selecao,id]} values valores a serem passados ao Sql
 * @param {*string} msgReject mensagem de rejeição caso ocorra um erro na conexão 
 * @returns  retorna objetos da Promise
 */

export const consulta = (sql,values ='',msgReject)=>{
  return new Promise((resolve,reject)=>{
    conexao.query(sql,values,(error,res)=>{
      if(error) return reject(msgReject)
        const row  =JSON.parse(JSON.stringify(res))
      return resolve(row);

    })
  })

}

export default conexao;