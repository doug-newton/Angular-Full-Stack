import Cat from '../models/cat';
import BaseCtrl from './base';

class CatCtrl extends BaseCtrl {
  model = Cat;
  singular = 'cat';
  plural = 'cats';
}

export default CatCtrl;
