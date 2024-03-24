import { Object3D } from "three";

export default class World extends Object3D {
  constructor(visuals) {
    super();
    this.name = "World";
    this.initPhysics();
    this.initVisual(visuals);
  }
  initPhysics() {}
  initVisual(meshes) {
    for (const mesh of meshes) {
      mesh.receiveShadow = true;
      mesh.castShadow = true;
      this.add(mesh);
    }
  }
}