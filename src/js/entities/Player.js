import { Object3D } from "three";

export default class Player extends Object3D {
  constructor(mesh) {
    super();
    this.name = "Player";
    this.initPhysics();
    this.initVisual(mesh);
  }
  initPhysics() {}

  initVisual(meshes) {
    for (const mesh of meshes) {
      mesh.scale.set(2, 2, 2);
      mesh.position.y = 3;
      mesh.position.x = 3;
      mesh.receiveShadow = true;
      mesh.castShadow = true;
      this.add(mesh);
    }
  }
}