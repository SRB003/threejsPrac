import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0,0,20);

// Create renderer
const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas , antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Add studio lighting

// Key light
const keyLight = new THREE.DirectionalLight(0xffffff, 1);
keyLight.position.set(5, 5, 5);
scene.add(keyLight);

// Fill light
const fillLight = new THREE.DirectionalLight(0xffffff, 0.7);
fillLight.position.set(-5, 5, 5);
scene.add(fillLight);

// Back light
const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
backLight.position.set(0, 5, -5);
scene.add(backLight);

// Ambient light for overall illumination
const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);

// Add light helpers
const keyLightHelper = new THREE.DirectionalLightHelper(keyLight, 1);
scene.add(keyLightHelper);

const fillLightHelper = new THREE.DirectionalLightHelper(fillLight, 1);
scene.add(fillLightHelper);

const backLightHelper = new THREE.DirectionalLightHelper(backLight, 1);
scene.add(backLightHelper);

// Note: AmbientLight doesn't have a helper as it doesn't have a specific direction

// Add a grid helper
const size = 20;
const divisions = 20;
const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

// Add an axes helper


// Load HDRI environment map
new RGBELoader()
  .load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/zwartkops_pit_1k.hdr', function(texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
   
    scene.environment = texture;

    const loader = new GLTFLoader();
    loader.load('./spaceship.glb', function(gltf) {
      scene.add(gltf.scene);
    });

    // Add a sample object to the scene
    // Remove the cube creation and addition to the scene
    // No replacement object is added as per the instruction
    

    // Render loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  });

// Handle window resize
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
