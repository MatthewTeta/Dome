import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let camera, scene, renderer;
const params = {
    v_num: 0,
    showHelpers: true,
};

if (WebGL.isWebGLAvailable()) {
    init();
    render();
} else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);
}

function init() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.useLegacyLights = false;
    renderer.localClippingEnabled = true;
    document.body.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 200);
    camera.position.set(-1.5, 2.5, 3.0);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render); // use only if there is no animation loop
    controls.minDistance = 1;
    controls.maxDistance = 10;
    controls.enablePan = false;

    const light = new THREE.HemisphereLight(0xffffff, 0x080808, 4.5);
    light.position.set(-1.25, 1, 1.25);
    scene.add(light);

    // GUI
    const gui = new GUI();
    gui.add(params, 'v_num', 0, 100).step(1).onChange(render);
    // Add toggle for xyz axes
    const helpers = new THREE.AxesHelper(5);
    helpers.visible = params.showHelpers;
    scene.add(helpers);
    gui.add(params, 'showHelpers').name('show helpers').onChange((value) => {
        params.showHelpers = helpers.visible = value;
        render();
    });

    // drawCube();
    drawDome();

    window.addEventListener('resize', onWindowResize);
}


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}

function render() {
    renderer.render(scene, camera);
}

function drawCube() {
    // Cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    return cube;
}

function drawDome() {
    // Geodesic Dome
    
    // Create the points
    // Create a material
    var material = new THREE.PointsMaterial({ vertexColors: true, size: 0.1 });
    // Create a geometry
    var geometry = new THREE.BufferGeometry();
    // Create a vertices array
    const p0 = [1 / 2, (1 + Math.sqrt(5)) / 4, 0.0];
    const points = [];
    const colors = [];
    const vertices = new Float32Array(12 * 3);
    const vertexColors = new Float32Array(12 * 3);
    for (let i = 0; i < 12; i++) {
        let xi, yi, zi;
        xi = parseInt(i / 4);
        yi = xi + 1;
        zi = yi + 1;
        xi %= 3;
        yi %= 3;
        zi %= 3;
        console.log(xi, yi, zi);
        // Copy original point with offset and negate either x or y coord (z is always 0)
        const x = vertices[i * 3 + xi] = p0[0] * (-2 * (i % 2 < 1) + 1);
        const y = vertices[i * 3 + yi] = p0[1] * (-2 * (i % 4 < 2) + 1);
        const z = vertices[i * 3 + zi] = p0[2];
        points.push(new THREE.Vector3(x, y, z));
        // Set color based on vertex position
        const color = new THREE.Color();
        color.setHSL(i / 12, 1.0, 0.5);
        vertexColors[i * 3 + 0] = color.r;
        vertexColors[i * 3 + 1] = color.g;
        vertexColors[i * 3 + 2] = color.b;
        colors.push(color);
    }
    // Create an attribute for the geometry and another for color
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(vertexColors, 3));
    // Create the point geometry
    var pointsGeometry = new THREE.Points(geometry, material);

    // Add the point to the scene
    scene.add(pointsGeometry);
}

/*
function drawLine() {
    //create a blue LineBasicMaterial
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const points = [];
    points.push(new THREE.Vector3(-1, 0, 0));
    points.push(new THREE.Vector3(0, 1, 0));
    points.push(new THREE.Vector3(1, 0, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    scene.add(line);
    return line;
}

*/
