import express, { request } from 'express';

import PointsConttroler from './controllers/PointsController';
import ItensConttroler from './controllers/ItensController';


const routes = express.Router();
const pointsConttroler = new PointsConttroler();
const itensControler = new ItensConttroler();

routes.get('/itens', itensControler.index);

routes.post('/points', pointsConttroler.create);
routes.get('/points', pointsConttroler.index);
routes.get('/points/:id', pointsConttroler.show);


export default routes;