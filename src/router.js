import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();
// Criando User
routes.post('/users', UserController.store);
// Criando Session
routes.post('/sessions', SessionController.store);

export default routes;
