import { Router, Application } from 'express';

import DogCtrl from './controllers/dog';
import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';

const setRoutes = (app: Application): void => {
  const router = Router();

  const catCtrl = new CatCtrl();
  const dogCtrl = new DogCtrl();
  const userCtrl = new UserCtrl();

  catCtrl.registerRoutes(router);
  userCtrl.registerRoutes(router);
  dogCtrl.registerRoutes(router);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);
};

export default setRoutes;
