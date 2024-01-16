// import * as THREE from 'https://threejs.org/build/three.module.js';
// import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';
// import { DRACOLoader } from 'https://threejs.org/examples/jsm/loaders/DRACOLoader.js';
// import { OrbitControls } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js';

// // Rest of your code...


// // Set up Three.js scene
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.getElementById('scene-container').appendChild(renderer.domElement);

// // Load GLTF model
// const loader = new GLTFLoader();
// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
// loader.setDRACOLoader(dracoLoader);

// loader.load('Models/scene.gltf', (gltf) => {
//   scene.add(gltf.scene);

//   // Additional code for handling textures if needed

//   // Enable OrbitControls for 360-degree view
//   const controls = new OrbitControls(camera, renderer.domElement);
//   controls.enableZoom = true;
//   controls.enablePan = false;

//   // Set camera position
//   camera.position.set(0, 0, 5);

//   // Animation loop
//   const animate = () => {
//     requestAnimationFrame(animate);
//     controls.update();
//     renderer.render(scene, camera);
//   };

//   animate();
// }, undefined, (error) => {
//   console.error(error);
// });

// // Handle window resize
// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });



// main.js

// Create scene
// main.js

// Create scene
// const scene = new THREE.Scene();

// // Create camera
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// // Create renderer
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.getElementById('model-container').appendChild(renderer.domElement);

// // Load glTF model
// const loader = new THREE.GLTFLoader();
// loader.load('Models/scene.gltf', (gltf) => {
//     scene.add(gltf.scene);
// });

// // Add ambient light
// const ambientLight = new THREE.AmbientLight(0xffffff, 1);
// scene.add(ambientLight);

// // Animation loop
// const animate = function () {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// };

// animate();

