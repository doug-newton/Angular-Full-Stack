import { Router, Application } from 'express';

import DogCtrl from './controllers/dog';
import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';

const setRoutes = (app: Application): void => {
  const router = Router();

  new CatCtrl().registerRoutes(router);
  new DogCtrl().registerRoutes(router);
  new UserCtrl().registerRoutes(router);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);
};

export default setRoutes;
