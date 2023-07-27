import * as THREE from 'three';
import * as math from 'mathjs';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const CAM_PERSPECTIVE = 0;
const CAM_ORTHO = 1;

let camera, scene, renderer;
const params = {
    v_num: 0,
    showHelpers: false,
    showText: false,
    camera: CAM_ORTHO,
};
const N_VERTICES = 12;
let labels = [];

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

    // Remove renderer if it already exists
    if (document.body.contains(renderer.domElement)) {
        document.body.removeChild(renderer.domElement);
    }
    document.body.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    const camera_perspective = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 200);
    const camera_ortho = new THREE.OrthographicCamera(window.innerWidth / -600, window.innerWidth / 600, window.innerHeight / 600, window.innerHeight / -600, 1, 200);

    // Select camera based on params
    camera = params.camera === CAM_PERSPECTIVE ? camera_perspective : camera_ortho;
    camera.position.set(-1.5, 2.5, 3.0);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render); // use only if there is no animation loop
    controls.minDistance = 1;
    controls.maxDistance = 10;
    controls.enablePan = false;

    const light1 = new THREE.HemisphereLight(0xffffff, 0x080808, 4.5);
    light1.position.set(-1.25, 1, 1.25);
    const light2 = new THREE.HemisphereLight(0xffffff, 0x080808, 4.5);
    light2.position.set(1.25, 1, -1.25);
    light2.intensity = 0.5;
    scene.add(light1);
    scene.add(light2);

    // GUI
    const gui = new GUI();
    // // Add camera selector
    // gui.add(params, 'camera', { perspective: CAM_PERSPECTIVE, orthographic: CAM_ORTHO }).name('camera').onChange((value) => {
    //     params.camera = value;
    //     camera = params.camera === CAM_PERSPECTIVE ? camera_perspective : camera_ortho;
    //     onWindowResize();
    // });
    gui.add(params, 'v_num', 0, 100).step(1).onChange(render);
    // Add toggle for xyz axes
    const helpers = new THREE.AxesHelper(5);
    helpers.visible = params.showHelpers;
    scene.add(helpers);
    gui.add(params, 'showHelpers').name('show helpers').onChange((value) => {
        params.showHelpers = helpers.visible = value;
        render();
    });
    gui.add(params, 'showText').name('show text').onChange((value) => {
        params.showText = value;
        drawDome();
        render();
    });

    // drawCube();
    drawTriangles();

    window.addEventListener('resize', onWindowResize);
}


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}

function render() {
    if (labels.length > 0) {
        // Make all labels face the camera
        for (let i = 0; i < N_VERTICES; i++) {
            labels[i].lookAt(camera.position);
        }
    }

    renderer.render(scene, camera);
}

function printMatrix(matrix, name = undefined) {
    const log = (name, ...args) => name === undefined ? console.log(...args) : console.log(name, ...args);
    if (matrix instanceof math.Matrix) {
        return log(name, ...matrix._data);
    }
    log(name, ...matrix);
}

// Draw two triangles
function drawTriangles() {
    let triangles = [
        [
            [0.0, 0.0, 0.0],
            [1.0, 0.0, 0.0],
            [1 / 2, Math.sqrt(3) / 2, 0.0],
        ],
        [
            [-0.8090169943749475, 0.0, 0.5],
            [0.0, -0.5, 0.8090169943749475],
            [0.0, 0.5, 0.8090169943749475],
        ],
    ];
    triangles = triangles.map((triangle) => math.transpose(triangle));
    triangles.forEach((triangle, i) => printMatrix(triangle, `triangle_${i}`));

    // Let's try this again, but try to get the transformation matrix as the inverse of 4 vectors in the triangle, along with their centroid
    const P = math.transpose([
        [...math.flatten(math.column(triangles[0], 0)), 1],
        [...math.flatten(math.column(triangles[0], 1)), 1],
        [...math.flatten(math.column(triangles[0], 2)), 1],
        [...math.multiply(
            math.flatten(
                math.cross(
                    math.subtract(
                        math.flatten(
                            math.column(triangles[0], 2)),
                        math.flatten(
                            math.column(triangles[0], 0)
                        )
                    ),
                    math.subtract(
                        math.flatten(
                            math.column(triangles[0], 1)
                        ),
                        math.flatten(
                            math.column(triangles[0], 0)
                        )
                    )
                )
            ), 1),
            0],
    ]);
    const Q = math.transpose([
        [...math.flatten(math.column(triangles[1], 0)), 1],
        [...math.flatten(math.column(triangles[1], 1)), 1],
        [...math.flatten(math.column(triangles[1], 2)), 1],
        [...math.multiply(
            math.flatten(
                math.cross(
                    math.subtract(
                        math.flatten(
                            math.column(triangles[1], 2)
                        ),
                        math.flatten(
                            math.column(triangles[1], 0)
                        )
                    ),
                    math.subtract(
                        math.flatten(
                            math.column(triangles[1], 1)
                        ),
                        math.flatten(
                            math.column(triangles[1], 0)
                        )
                    )
                )
            ), 1),
            0],
    ]);
    // Computer inverse of P
    const P_inv = math.inv(P);
    // Compute M
    let M = math.multiply(Q, P_inv);
    printMatrix(M, 'M');

    const T1 = math.transpose([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ]);
    triangles.push(T1);
    // Now we would like to apply the transformation to the above triangle
    let T1_ = math.transpose([
        [...math.flatten(math.column(T1, 0)), 1],
        [...math.flatten(math.column(T1, 1)), 1],
        [...math.flatten(math.column(T1, 2)), 1],
    ]);
    let T2 = math.multiply(M, T1_);
    T2 = math.subset(T2, math.index(math.range(0, 3), math.range(0, 3)));
    triangles.push(T2);

    const colors = [0xff0000, 0x0000ff, 0xffffff, 0x00ff00, 0xff00ff]; // red and blue
    triangles.forEach((triangle, index) => {
        triangle = math.transpose(triangle);
        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array(triangle.flat());
        const indices = new Uint16Array([0, 1, 2]);

        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        geometry.setIndex(new THREE.BufferAttribute(indices, 1));

        const material = new THREE.MeshBasicMaterial({ color: colors[index], side: THREE.DoubleSide });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
    });
}
