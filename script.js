// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a background star image (skybox or skydome)
const skyGeometry = new THREE.SphereGeometry(1000, 32, 32); // Adjust the radius as needed
const skyTexture = new THREE.TextureLoader().load('img/space.png'); // Replace with your own starry sky image
const skyMaterial = new THREE.MeshBasicMaterial({ map: skyTexture, side: THREE.BackSide });
const skybox = new THREE.Mesh(skyGeometry, skyMaterial);
scene.add(skybox);

// Create a planet mesh
const planetGeometry = new THREE.SphereGeometry(4, 32, 32);
const planetTexture = new THREE.TextureLoader().load('img/Layer.png'); // Replace with your own texture
const planetMaterial = new THREE.MeshBasicMaterial({ map: planetTexture });
const planet = new THREE.Mesh(planetGeometry, planetMaterial);
scene.add(planet);

// Set up the camera position
camera.position.z = 10;

// Function to animate the scene
const animate = () => {
    requestAnimationFrame(animate);
    // Rotate the planet
    planet.rotation.x += 0.0001;
    planet.rotation.y += 0.0005;
    renderer.render(scene, camera);
};

// Handle window resizing
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
});

// Start the animation loop
animate();