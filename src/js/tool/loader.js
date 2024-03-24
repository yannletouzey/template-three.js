import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
export default async function loadAssets(path) {
  const glb = await loader.loadAsync(path);
  const object = []
  for (const mesh of glb.scene.children) {
    object.push(mesh)
  }
  return { object }
}