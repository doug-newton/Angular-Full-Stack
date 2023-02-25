import Dog from "../models/dog";
import BaseCtrl from "./base";

class DogCtrl extends BaseCtrl {
    model = Dog;
}

export default DogCtrl;