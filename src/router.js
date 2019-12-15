import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();
// Criando User
routes.post('/users', UserController.store);

export default routes;
