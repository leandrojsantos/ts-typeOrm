import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: '*****loading.....' });
});

export default routes;
