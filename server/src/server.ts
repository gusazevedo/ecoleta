import express from 'express';

const app = express ();

app.get('/users', (request, response) => {
    console.log('listagem de usuarios');

    response.json([
        'Gustavo',
        'Maria Clara',
        'Pam Pam',
        'Nalinha',
        'Lucy'
    ]);
})

app.listen(3333);