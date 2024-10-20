
# Three.js Practice with Vite

This repository contains a simple project built using [Three.js](https://threejs.org/) and the [Vite](https://vitejs.dev/) bundler. The project demonstrates fundamental 3D graphics concepts such as scenes, cameras, renderers, geometries, materials, meshes, textures, lights, animations, and basic physics.

## Features

1. **Scene**: A root container for 3D objects, lights, and cameras.
2. **Camera**: A perspective camera to view the 3D scene.
3. **Renderer**: A WebGL renderer that displays the scene from the camera's perspective.
4. **Geometry**: Basic shapes such as cubes, spheres, etc., created with predefined geometries.
5. **Material**: Surface properties for geometries, defining how objects appear.
6. **Mesh**: The combination of geometry and material to create visible 3D objects.
7. **Texture**: Applied to materials for more realistic surfaces.
8. **Light**: Various types of lighting to enhance the 3D scene's realism.
9. **Animation**: Basic animations using Three.js's built-in animation loops.
10. **Physics**: Basic physics simulation, adding realism to the interactions within the scene.

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SRB003/threejsPrac.git
   cd threejsPrac
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

### Build for Production

To build the project for production, run:

```bash
npm run build
# or
yarn build
```

This will bundle the code using Vite for optimized production deployment.

## Project Structure

- `src/`: Contains all source code.
  - `main.js`: Entry point for the project.
  - `scene.js`: Initializes the Three.js scene, including objects, lights, camera, and renderer.
  - `animations.js`: Contains animation loop logic.
  - `physics.js`: Basic physics implementation for scene interactions.
  
## How It Works

### Scene

The scene is where all 3D objects, lights, and cameras are placed. In this project, a basic scene is set up using the `THREE.Scene()` object.

### Camera

A perspective camera is used to simulate how a human eye would perceive the scene. It is set up using `THREE.PerspectiveCamera()`.

### Renderer

The renderer is responsible for drawing the scene. A WebGL renderer is created using `THREE.WebGLRenderer()`, and it outputs the graphics to the browser.

### Geometry & Mesh

Various geometries such as cubes, spheres, and planes are created using `THREE.BoxGeometry()`, `THREE.SphereGeometry()`, and more. These geometries are then combined with materials to form meshes (`THREE.Mesh()`), which are the objects rendered in the scene.

### Materials & Textures

Materials define the look of the objects. Simple materials like `THREE.MeshBasicMaterial()` are used, and textures are applied for more detail using `THREE.TextureLoader()`.

### Lights

The scene is illuminated using different light types, including point lights and directional lights (`THREE.PointLight()`, `THREE.DirectionalLight()`), to create realistic shading and shadows.

### Animation

The project utilizes Three.js's built-in requestAnimationFrame to animate the scene. Objects in the scene are animated using custom animation loops.

### Physics

Basic physics is implemented to simulate natural interactions like gravity and collisions. Objects fall or interact based on predefined physical properties.

## Bundler: Vite

The project is bundled using Vite, a fast and lightweight build tool. It offers a super-fast development experience and supports modern JavaScript features.

## preview
![image](https://github.com/user-attachments/assets/f10aca98-a9ed-49f7-9d44-577862e54e46)

