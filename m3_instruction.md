# Prompt for Antigravity AI Coding Assistant

You are an expert frontend graphics and Three.js developer.

Your task is to modify my existing `index.html` file to include a cinematic animated Three.js background behind my glassmorphism UI.

The current website already contains the UI elements. You must ONLY add and integrate the animated 3D background system without breaking the existing layout or styling.

---

# OBJECTIVE

Create a fullscreen animated Three.js canvas that sits behind the website content as a fixed background.

The background should contain:

- A slowly rotating `TORUS KNOT`
- Glowing `CYAN / BLUE` emissive material
- Smooth animation loop
- Ambient futuristic lighting
- Transparent renderer background
- Responsive resizing behavior

The effect should feel:

- Modern
- Futuristic
- Premium
- Smooth
- Minimal
- Cyberpunk-inspired

---

# REQUIRED TASKS

## 1. MODIFY `index.html`

Inject the Three.js CDN script before the closing `</body>` tag.

Use this CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
```

Also inject:

```html
<script src="bg.js"></script>
```

---

## 2. CREATE A NEW FILE CALLED `bg.js`

This file must:

- Initialize a Three.js scene
- Create a PerspectiveCamera
- Create a WebGLRenderer
- Append the renderer canvas to the document body
- Render a fullscreen animated background
- Add proper resize handling
- Animate the object continuously

---

# 3D OBJECT REQUIREMENTS

Create a:

```text
THREE.TorusKnotGeometry
```

Use a glowing material such as:

```text
THREE.MeshStandardMaterial
```

with:

- emissive color
- metallic look
- smooth shading

Suggested colors:

```text
Color: #00ffff
Emissive: #00ffff
```

---

# LIGHTING REQUIREMENTS

Add:

- Ambient light
- Point light

The lighting should create a soft futuristic glow effect.

---

# ANIMATION REQUIREMENTS

The object must:

- Slowly rotate on the X axis
- Slowly rotate on the Y axis
- Animate continuously using:
  ```javascript
  requestAnimationFrame()
  ```

Animation must feel smooth and lightweight.

---

# CANVAS STYLING REQUIREMENTS

The renderer canvas MUST:

```css
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: -1;
pointer-events: none;
```

The background must stay behind the UI at all times.

The existing glassmorphism UI should remain fully visible above the canvas.

---

# RESPONSIVENESS REQUIREMENTS

The renderer must resize correctly when the browser window changes size.

Use:

```javascript
window.addEventListener('resize', ...)
```

Update:

- camera aspect ratio
- projection matrix
- renderer size

---

# PERFORMANCE REQUIREMENTS

Optimize for smooth performance.

Requirements:

- Use antialiasing
- Use devicePixelRatio safely
- Avoid unnecessary objects
- Keep rendering efficient

---

# FINAL EXPECTED RESULT

The website should have:

- A fullscreen animated Three.js background
- A glowing rotating torus knot
- Smooth futuristic animation
- Glassmorphism UI floating above the 3D scene
- Clean responsive behavior

---

# IMPORTANT RULES

- Do NOT redesign the existing UI
- Do NOT remove any existing HTML content
- Do NOT change current layout structure
- ONLY add the Three.js background system
- Keep code clean and modular
- Use modern JavaScript syntax
- Ensure all code is production-ready

---

# OUTPUT FORMAT

Provide:

1. Updated `index.html` modifications
2. Full contents of `bg.js`
3. Any required CSS additions

Output complete working code only.