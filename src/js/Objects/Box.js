import { Mesh, BoxGeometry, MeshNormalMaterial } from "three";

class Box extends Mesh {
  constructor(w, h, d) {
    super();
    this.geometry = new BoxGeometry(w, h, d);
    this.material = new MeshNormalMaterial();
  }
}
export default Box;