import { Router, Application } from 'express';

import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';

const setRoutes = (app: Application): void => {
  const router = Router();
  const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();

  // Cats
  catCtrl.registerRoutes(router, 'cat', 'cats')

  // Users
  router.route('/login').post(userCtrl.login);
  userCtrl.registerRoutes(router, 'user', 'users')

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

};

export default setRoutes;
