import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import Light from './Light'
import Camera from './Camera'
import loader from './tool/loader'
import World from './entities/World'
import Player from './entities/Player'

const canvas = document.getElementById('canvas')

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

// Create scene
const scene = new THREE.Scene()

// Create camera
const camera = new Camera()

// Create renderer
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize( sizes.width, sizes.height )
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Create world
const worldLoader = await loader('./platform.glb')
const world = new World(worldLoader.object)
scene.add(world)

// Create player
const playerLoader = await loader('./player.glb')
const player = new Player(playerLoader.object)
scene.add(player)

// Resize control
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Fullscreen control
window.addEventListener('dblclick', () => {
	const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
	if (!fullscreenElement) {
		if (canvas.requestFullscreen) {
			canvas.requestFullscreen()
		} else if (canvas.webkitRequestFullscreen) {
			canvas.webkitRequestFullscreen()
		}
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen()
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen()
		}
	}
})

// Create light
const light = new Light()
scene.add( light )

// Create constrols with mouse
const controls = new OrbitControls( camera, canvas )
controls.update()

function animate() {
	requestAnimationFrame( animate )
	controls.update()
	renderer.render( scene, camera )
}

animate()