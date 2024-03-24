import { AmbientLight, PointLight, Object3D, Vector2, PointLightHelper } from "three";

class Light extends Object3D {
  constructor() {
    super();
    const ambient = new AmbientLight(0xffffff, 0.7);
    const point = new PointLight(0xffffff, 100);
    const pointLightHelper = new PointLightHelper( point, 2 );
    point.position.set(0, 5, 5);
    point.lookAt(0, 0, 0);
    point.castShadow = true;
    point.shadow.bias = -0.001;
    point.shadow.mapSize = new Vector2(1024, 1024);
    this.add(ambient, point, pointLightHelper);
  }
}

export default Light;