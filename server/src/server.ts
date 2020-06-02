import express, { response, request } from 'express';
import path from 'path';

import routes from './routes';

const app = express();

// por padrão o express não entende qual o tipo da aplicação
// então preciso dizer pra ele que eu preciso que ele entenda requisições tipo JSON
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);