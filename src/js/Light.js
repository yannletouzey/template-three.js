import { AmbientLight, PointLight, Object3D } from "three";

class Light extends Object3D {
  constructor() {
    super();
    const ambient = new AmbientLight(0xffffff, 0.5);
    const point = new PointLight(0xffffff, 0.5);
    this.add(ambient, point);
    }
}

export default Light;