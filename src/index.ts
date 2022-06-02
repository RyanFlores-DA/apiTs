import express from 'express';
import {router} from './routes';

const server = express();

server.use(router);

server.listen(7000, () => {

});