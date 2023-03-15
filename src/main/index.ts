import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { state } from 'appState';
import { Building } from 'scene/building';
import { Ground } from 'scene/ground';
import { Controls } from 'scene/gui';
import { SceneLighting } from 'scene/lighting';
import { Sky } from 'scene/sky';

import './main.css';

const scene = new Scene();
initializeObjects(scene);
startScene();

function initializeObjects(scene: Scene) {
  state.sceneManager.scene = scene;
  scene.add(new SceneLighting());
  scene.add(new Building());
  scene.add(new Ground());
  new Controls();
  scene.background = new Sky();
}

function startScene() {
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 8;
  camera.position.y = 5;
  camera.position.x = 3;
  camera.lookAt(0, 0, 0);

  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);

  window.addEventListener('resize', onWindowResize, false);
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
  }
  function animate() {
    requestAnimationFrame(animate);

    controls.update();

    render();
  }

  function render() {
    renderer.render(scene, camera);
  }
  animate();
}
