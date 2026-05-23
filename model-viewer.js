import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/controls/OrbitControls.js';

const container = document.getElementById('dyson-container');

if (container) {
    // 1. Initialize Scene, Camera, and Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        45, // Field of view
        container.clientWidth / container.clientHeight, // Aspect ratio
        0.1, // Near clipping plane
        1000 // Far clipping plane
    );
    camera.position.set(0, 5, 20);

    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    container.appendChild(renderer.domElement);

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;

    // 2. Load the 3D Object
    let loadedModel = null;
    const loader = new GLTFLoader();

    loader.load(
        'dyson_sphere.glb',
        (gltf) => {
            loadedModel = gltf.scene;
            
            // Adjust scaling and position
            loadedModel.scale.set(1, 1, 1);
            loadedModel.position.set(0, 0, 0);
            
            scene.add(loadedModel);
        },
        (xhr) => {
            console.log('Showcase Model ' + (xhr.loaded / xhr.total * 100) + '% loaded');
        },
        (error) => {
            console.error('Error loading showcase model:', error);
            // Try to load .dlg if .glb failed since original path had .dlg
            if (error.target && error.target.src && error.target.src.includes('.glb')) {
                loader.load('desktop/dyson_sphere.dlg', (gltf) => {
                    loadedModel = gltf.scene;
                    loadedModel.scale.set(1, 1, 1);
                    scene.add(loadedModel);
                });
            }
        }
    );

    // Fallback load explicitly using the .dlg path if it's the exact path given
    loader.load(
        'desktop/dyson_sphere.dlg',
        (gltf) => {
            if(!loadedModel) {
                loadedModel = gltf.scene;
                loadedModel.scale.set(1, 1, 1);
                loadedModel.position.set(0, 0, 0);
                scene.add(loadedModel);
            }
        },
        undefined,
        (error) => { /* ignore if already loaded */ }
    );

    // 3. Add Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); 
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.2);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // 4. Handle Window/Container Resize
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });

    // 5. Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Update controls for damping and auto-rotation
        controls.update();

        renderer.render(scene, camera);
    }

    animate();
}
