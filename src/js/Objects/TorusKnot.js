import { Mesh, TorusKnotGeometry, MeshNormalMaterial } from "three";

class TorusKnot extends Mesh {
  constructor( radius, tube, tubularSegments, radialSegments, p, q ) {
    super();
    this.geometry = new TorusKnotGeometry( radius, tube, tubularSegments, radialSegments, p, q );
    this.material = new MeshNormalMaterial();
  }
}

export default TorusKnot;
