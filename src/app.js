import express from 'express';
import routes from './routes.js';


const app = express();

// make reading of format JSON
app.use(express.json());

//chamar rotas 
app.use(routes);

export default app;


