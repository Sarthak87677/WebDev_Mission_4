import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';

// 1. Initialize Scene, Camera, and Renderer
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75, // Field of view
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, // Near clipping plane
    1000 // Far clipping plane
);
camera.position.z = 30;

// Create WebGLRenderer with transparent background and antialiasing
const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Safely use devicePixelRatio for performance

// Apply canvas styling directly
renderer.domElement.style.position = 'fixed';
renderer.domElement.style.top = '0';
renderer.domElement.style.left = '0';
renderer.domElement.style.width = '100%';
renderer.domElement.style.height = '100%';
renderer.domElement.style.zIndex = '-1';
renderer.domElement.style.pointerEvents = 'none';

// Append renderer to body
document.body.appendChild(renderer.domElement);

// 2. Load the 3D Object
let loadedModel = null;
const loader = new GLTFLoader();

loader.load(
    'desktop/dyson_sphere.dlg',
    (gltf) => {
        loadedModel = gltf.scene;
        
        // Scale and Position requirements
        loadedModel.scale.set(1, 1, 1);
        loadedModel.position.set(0, 0, 0);
        
        scene.add(loadedModel);
    },
    (xhr) => {
        console.log('Model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading model:', error);
    }
);

// 3. Add Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft futuristic glow
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(20, 20, 20);
scene.add(pointLight);

// 4. Handle Window Resize
window.addEventListener('resize', () => {
    // Update camera aspect ratio
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // Update renderer size
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// 5. Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Slowly rotate on Y axis if the model is loaded
    if (loadedModel) {
        loadedModel.rotation.y += 0.002;
    }

    // Render the scene
    renderer.render(scene, camera);
}

// Start animation
animate();
