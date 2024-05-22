import conexao from "../database/conexao.js";
import selecaoRepository from "../repositories/selecaoRepository.js";


class SelectController {

 async index(req,res){
   const list  = await selecaoRepository.findAll();
   res.json(list);
  }

 async show(req,res){
    const id = req.params.id;
    const row = await selecaoRepository.findById(id);
    res.json(row);
    
 }

 async store(req,res){
  const selecao = req.body;
  const criarSel = await selecaoRepository.create(selecao);
  res.json(criarSel);
 
}

 async update(req,res){
  const id =req.params.id;
  const selecao = req.body;
  const row = await selecaoRepository.update(selecao,id);
  res.json(row);
 
}

async delete(req,res){
  const id = req.params.id;
  const row = await selecaoRepository.delete(id);
 
  res.json(row);
  
}
}
 
export default new  SelectController();