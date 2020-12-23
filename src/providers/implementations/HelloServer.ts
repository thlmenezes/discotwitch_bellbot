import { Server } from '~/providers/server';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.send('Hello World'));

export default new Server(router).express;