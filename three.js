import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Add studio lighting

// Add high-intensity directional light
const highIntensityLight = new THREE.DirectionalLight(0xffffff, 2);
highIntensityLight.position.set(10, 10, 10);
scene.add(highIntensityLight);

// Add a helper to visualize the light direction (optional)
const lightHelper = new THREE.DirectionalLightHelper(highIntensityLight, 1);
scene.add(lightHelper);


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

// Add light helpers for all lights
const keyLightHelper = new THREE.DirectionalLightHelper(keyLight, 1);
scene.add(keyLightHelper);

const fillLightHelper = new THREE.DirectionalLightHelper(fillLight, 1);
scene.add(fillLightHelper);

const backLightHelper = new THREE.DirectionalLightHelper(backLight, 1);
scene.add(backLightHelper);

// Note: AmbientLight doesn't have a helper as it doesn't have a specific direction

let loader = new THREE.TextureLoader();
let color = loader.load('./assets/paper_0025_color_1k.jpg');
let roughness = loader.load('./assets/paper_0025_roughness_1k.jpg');
let normal = loader.load('./assets/paper_0025_normal_1k.jpg');
let height = loader.load('./assets/paper_0025_height_1k.jpg');



const geometry = new THREE.BoxGeometry( 3, 1.8, 2 );
const material = new THREE.MeshStandardMaterial( { map : color, roughnessMap : roughness, normalMap : normal, heightMap : height} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas,antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );

window.addEventListener('resize',()=>{
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.autoRotate = true;


function animate() {
  window.requestAnimationFrame(animate);
	renderer.render( scene, camera );
  
 controls.update();
}
animate();