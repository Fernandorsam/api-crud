import { Router } from "express";
import selectController from "./app/controllers/selectController.js";



// create route 
const routes = Router();

 routes.get('/selecoes',selectController.index);

routes.get('/selecoes/:id',selectController.show);

routes.post('/selecoes',selectController.store);

routes.put('/selecoes/:id',selectController.update);routes.delete('/selecoes/:id',selectController.delete);

export default routes