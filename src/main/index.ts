import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { state } from 'appState';
import { Building } from 'scene/building';
import { Ground } from 'scene/ground';
import { BuildingControls } from 'scene/gui';
import { SceneLighting } from 'scene/lighting';
import { Sky } from 'scene/sky';

import './main.css';

// create scene
const scene = new Scene();

// initialize camera
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 8;
camera.position.y = 5;
camera.position.x = 3;
camera.lookAt(0, 0, 0);

// initialize renderer
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// make sure
const controls = new OrbitControls(camera, renderer.domElement);

// fix aspect ratio of canvas on window resize
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

// initialize all sceneManager state.
state.sceneManager.scene = scene;
state.sceneManager.mainCamera = camera;
state.sceneManager.renderer = renderer;

// add objects to scene
scene.add(new SceneLighting());
scene.add(new Building());
scene.add(new Ground());
// add button as child of camera so it always faces the camera

new BuildingControls();
scene.background = new Sky();

// define animation loop
function animate() {
  requestAnimationFrame(animate);

  controls.update();

  render();
}

function render() {
  renderer.render(scene, camera);
}

// start animation loop
animate();
