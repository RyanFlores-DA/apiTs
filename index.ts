import express, {Request, Response} from 'express';

const server = express();

server.get('/', (request: Request, response: Response) => {
    return response.json({ mensagem: 'Aplication function' })
});

server.get('/usuario', (request: Request, response: Response) => {
    
    return response.json({
        name: 'Junior',
        email: 'a@gmail.com',
        pass: '1231'
    })

})

server.listen(7000, () => {
});