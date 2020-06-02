import express, { request } from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/itens', async (request, response) => { 
    const itens = await knex('itens').select('*');

    const serializedItens = itens.map(item => {
        return { 
            id: item.id,
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`,
        };
    });
    
    return response.json(serializedItens);
});

routes.post('/points', async (request, response) => {
    const {
        name,
        email,
        whatsapp,
        city,
        uf,
        latitude,
        longitude,
        itens
    } = request.body;

    const trx = await knex.transaction();

    const insertedIds = await trx('points').insert({
        name,
        email,
        whatsapp,
        city,
        uf,
        latitude,
        longitude,
        image: 'image-fake'
    });

    const point_id = insertedIds[0];

    const poinsItens = itens.map((item_id: Number) => {
        return {
            item_id,
            point_id,
        };
    });

    await trx('point_itens').insert(poinsItens);

    return response.json({ success: true });
});

export default routes;