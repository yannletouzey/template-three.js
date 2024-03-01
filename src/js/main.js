import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Light from './Light';
import Camera from './Camera';
import TorusKnot from './Objects/TorusKnot';

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new Camera();

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// Create light
const light = new Light();
scene.add( light );

// Create object
const torusKnot = new TorusKnot( 10, 3, 100, 16 );
scene.add( torusKnot );

// Create constrols with mouse
const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

function animate() {
	requestAnimationFrame( animate );
	torusKnot.rotation.x += 0.001;
	torusKnot.rotation.y += 0.001;
	controls.update();
	renderer.render( scene, camera );
}

animate();