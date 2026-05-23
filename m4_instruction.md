# Prompt for Antigravity AI Coding Assistant

You are an expert Three.js and WebGL developer.

Your task is to update my existing `bg.js` file so that it loads and renders an external 3D `.glb` model using Three.js `GLTFLoader`.

The existing scene, renderer, camera, lighting, and animation loop already exist. You must extend the current implementation without breaking any existing functionality.

---

# OBJECTIVE

Replace or enhance the current procedural geometry scene with a real imported 3D model.

The model file is located EXACTLY at:

```text
desktop/dyson_sphere.dlg
```

You must load this model into the Three.js scene and animate it smoothly.

---

# REQUIRED TASKS

## 1. IMPORT GLTFLoader

Import the `GLTFLoader` module from the official Three.js CDN.

Use the correct CDN version compatible with the existing Three.js version.

Example structure:

```javascript
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';
```

Ensure imports are compatible with module-based JavaScript execution.

---

# 2. UPDATE SCRIPT LOADING IF NECESSARY

If required, update the HTML script tag to support ES modules.

Example:

```html
<script type="module" src="bg.js"></script>
```

Do NOT break existing script loading.

---

# 3. LOAD THE MODEL

Use:

```javascript
GLTFLoader
```

to load the model located at:

```text
desktop/dyson_sphere.dlg
```

Requirements:

- Proper loading callback
- Error handling
- Progress logging (optional)
- Add the loaded model to the scene

---

# MODEL TRANSFORM REQUIREMENTS

After loading:

## Scale

Scale the model uniformly by:

```javascript
1
```

Example:

```javascript
model.scale.set(1, 1, 1);
```

---

## Position

Center the model on screen.

Example:

```javascript
model.position.set(0, 0, 0);
```

---

# ROTATION ANIMATION REQUIREMENTS

Inside the existing animation loop:

Add logic to slowly rotate the loaded model on its Y axis.

Example behavior:

```javascript
model.rotation.y += 0.002;
```

Animation should feel:

- Smooth
- Cinematic
- Slow
- Premium

---

# SCENE REQUIREMENTS

Ensure:

- Existing lighting still works correctly
- The model is visible from the camera
- Camera positioning is adjusted if necessary
- Renderer remains fullscreen
- Transparent background still works
- Glassmorphism UI remains above the canvas

---

# ERROR HANDLING REQUIREMENTS

Include proper loader error handling:

Example:

```javascript
(error) => {
  console.error('Error loading model:', error);
}
```

---

# PERFORMANCE REQUIREMENTS

Optimize for smooth rendering:

- Use efficient animation updates
- Avoid unnecessary re-renders
- Keep GPU load reasonable
- Maintain responsive behavior

---

# IMPORTANT NOTES

- Do NOT remove existing scene setup unless necessary
- Do NOT redesign the UI
- Do NOT remove existing lighting
- ONLY enhance the background scene with the imported model
- Preserve fullscreen canvas behavior
- Keep code clean and production-ready

---

# EXPECTED FINAL RESULT

The website background should display:

- A fully rendered imported 3D model
- Smooth slow Y-axis rotation
- Cinematic futuristic appearance
- Responsive fullscreen rendering
- Proper integration behind the glassmorphism UI

---

# OUTPUT FORMAT

Provide:

1. Full updated `bg.js` file
2. Any required `index.html` modifications
3. Any additional required setup instructions

Output complete working code only.