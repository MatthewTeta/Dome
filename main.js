import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let camera, scene, renderer;
const params = {
    v_num: 0,
    showHelpers: false,
    showText: false,
};
const N_VERTICES = 12;
// const N_EDGES = N_VERTICES * 2;
const N_EDGES = 30;
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
    document.body.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 200);
    // camera = new THREE.OrthographicCamera(window.innerWidth / -600, window.innerWidth / 600, window.innerHeight / 600, window.innerHeight / -600, 1, 200);
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
    gui.add(params, 'showText').name('show text').onChange((value) => {
        params.showText = value;
        drawDome();
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
    // // Make all labels face the camera
    // for (let i = 0; i < N_VERTICES; i++) {
    //     labels[i].lookAt(camera.position);
    // }

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
    const pointColors = [];
    const vertices = new Float32Array(N_VERTICES * 3);
    const vertexColors = new Float32Array(N_VERTICES * 3);
    for (let i = 0; i < N_VERTICES; i++) {
        let xi, yi, zi;
        xi = parseInt(i / 4);
        yi = xi + 1;
        zi = yi + 1;
        xi %= 3;
        yi %= 3;
        zi %= 3;
        // console.log(xi, yi, zi);
        // Copy original point with index offsets and negate either x or y coord (z is always 0)
        const x_neg = -2 * ((i + 0) / 2 % 2 >= 1) + 1;
        const y_neg = -2 * ((i + 1) / 2 % 2 >= 1) + 1;
        // const x_neg = -2 * (i % 2 >= 1) + 1;
        // const y_neg = -2 * (i % 4 >= 2) + 1;
        // console.log(x_neg, y_neg);
        console.log(
            xi * (xi === 0 ? x_neg : 1) * (xi == 1 ? y_neg : 1),
            yi * (yi === 0 ? x_neg : 1) * (yi == 1 ? y_neg : 1),
            zi * (zi === 0 ? x_neg : 1) * (zi == 1 ? y_neg : 1)
        );
        // const x_neg = 1, y_neg = 1;
        let x = p0[0] * x_neg;
        let y = p0[1] * y_neg;
        let z = p0[2];
        // Also swap for the points array
        const p = [x, y, z];
        const p2 = [p[xi], p[yi], p[zi]];
        vertices[i * 3 + 0] = p[xi];
        vertices[i * 3 + 1] = p[yi];
        vertices[i * 3 + 2] = p[zi];
        points.push(new THREE.Vector3(p2[0], p2[1], p2[2]));
        // console.log(vertices.slice(i * 3, i * 3 + 3));
        // console.log(points[i]);
        // Set color based on vertex position
        const color = new THREE.Color();
        color.setHSL(i / N_VERTICES, 1.0, 0.5);
        vertexColors[i * 3 + 0] = color.r;
        vertexColors[i * 3 + 1] = color.g;
        vertexColors[i * 3 + 2] = color.b;
        pointColors.push(color);
    }
    // Create an attribute for the geometry and another for color
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(vertexColors, 3));
    // Create the point geometry
    var pointsGeometry = new THREE.Points(geometry, material);
    // Add the point to the scene
    if (params.showText) {
        // Add text labels
        for (let i = 0; i < N_VERTICES; i++) {
            const label = createTextLabel(i.toString(), 'white');
            label.position.copy(points[i]);
            label.position.add(new THREE.Vector3(0.05, 0.05, 0));
            scene.add(label);
            labels.push(label);
        }
    }
    scene.add(pointsGeometry);

    // Create the edges
    // Create a material
    const edgesMaterial = new THREE.LineBasicMaterial({ vertexColors: true });
    // Create a geometry
    const edgesGeometry = new THREE.BufferGeometry();
    // Create an array for the vertices
    // const edgesVertices = new Float32Array(30 * 3);
    const edges = [];
    const edgeColors = [];
    const ind = [];
    const edgeIndices = [];
    console.log(pointColors);
    const addEdge = (i, j) => {
        if (i === j) return;
        const s = [i, j].sort().toString();
        if (ind.includes(s)) {
            throw new Error('Edge already exists');
        }
        ind.push([i, j].sort().toString());
        edgeIndices.push([i, j].sort());
        edges.push(new THREE.Line3(points[i], points[j]));
        edgeColors.push(pointColors[i]);
        edgeColors.push(pointColors[j]);
    };
    // Generate the edges
    for (let i = 0; i < N_VERTICES; i++) {
        addEdge(i, (i + 3) % N_VERTICES);
        // See https://upload.wikimedia.org/wikipedia/commons/6/60/Octant_numbers.svg
        if (i % 2 === 0) {
            addEdge(i, (i + 4) % N_VERTICES);
        }
        if (i % 4 === 0) {
            addEdge(i, (i + 7) % N_VERTICES);
        }
        if (i % 4 === 1) {
            addEdge(i, (i + 1) % N_VERTICES);
        }
        if (i % 4 === 3) {
            addEdge(i, (i + 2) % N_VERTICES);
            addEdge(i, (i + 6) % N_VERTICES);
        }
    }
    console.log(edges.length);
    edgeIndices.sort();
    console.log(edgeIndices);
    // let e = [
    //     [0, 3],
    //     [0, 4],
    //     [0, 6],
    //     [0, 7],
    //     [0, 8],
    //     // [0, 10],
    // ];
    // for (let j = 0; j < e.length; j++) {
    //     addEdge(e[j][0], e[j][1]);
    //     edgeColors.push(new THREE.Color(1, 1, 1));
    //     edgeColors.push(new THREE.Color(1, 1, 1));
    // }
    // Create arrays for the vertices and colors
    const edgesVertices = new Float32Array(N_EDGES * 2 * 3);
    const edgesVertexColors = new Float32Array(N_EDGES * 2 * 3);
    // Populate the arrays
    for (let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        const color1 = edgeColors[i * 2];
        const color2 = edgeColors[i * 2 + 1];
        // console.log(edge);
        edgesVertices[i * 2 * 3 + 0] = edge.start.x;
        edgesVertices[i * 2 * 3 + 1] = edge.start.y;
        edgesVertices[i * 2 * 3 + 2] = edge.start.z;
        edgesVertices[i * 2 * 3 + 3] = edge.end.x;
        edgesVertices[i * 2 * 3 + 4] = edge.end.y;
        edgesVertices[i * 2 * 3 + 5] = edge.end.z;
        edgesVertexColors[i * 2 * 3 + 0] = color1.r;
        edgesVertexColors[i * 2 * 3 + 1] = color1.g;
        edgesVertexColors[i * 2 * 3 + 2] = color1.b;
        edgesVertexColors[i * 2 * 3 + 3] = color2.r;
        edgesVertexColors[i * 2 * 3 + 4] = color2.g;
        edgesVertexColors[i * 2 * 3 + 5] = color2.b;
    }
    // Create attributes for the geometry
    edgesGeometry.setAttribute('position', new THREE.BufferAttribute(edgesVertices, 3));
    edgesGeometry.setAttribute('color', new THREE.BufferAttribute(edgesVertexColors, 3));
    // Create the line object
    const lineObject = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    const lineObject2 = new THREE.Line(geometry, edgesMaterial);
    // Add the line to the scene
    scene.add(lineObject);
    // scene.add(lineObject2);

    // Create the faces
    // Create the triangle index array
    // Determine all unique combinations of 3 edges
    const indices = [];
    let indS = [];
    for (let i = 0; i < edgeIndices.length; i++) {
        // indices.push([i, (i + 1) % N_VERTICES, (i + 2) % N_VERTICES]);
        for (let j = 0; j < edgeIndices.length; j++) {
            if (i === j) continue;
            const e1 = edgeIndices[i];
            const e2 = edgeIndices[j];
            let shared = -1;
            let not_shared = [-1, -1];
            // Check that the adges share a vertex
            for (let k = 0; k < 2; k++) {
                if ((not_shared[1] = e2.indexOf(e1[k])) !== -1) {
                    // They share 1 vertex
                    shared = e1[k];
                    // Store the other 2 vertices
                    not_shared[0] = e1[(k + 1) % 2];
                    not_shared[1] = e2[(not_shared[1] + 1) % 2];
                    // console.log(e1, e2, not_shared);
                    break;
                }
            }
            if (not_shared[0] === -1) continue;
            // Find the third edge if it exists
            not_shared.sort();
            // console.log(edgeIndices.map((e) => e.toString()));
            const l = edgeIndices.map((e) => e.toString()).indexOf(not_shared.toString());
            // console.log(edgeIndices.map((e) => e.toString())[l], not_shared.toString());
            if (l !== -1) {
                // Check that we haven't already added this triangle
                // const s = new Set([...indS, edgeIndices[l]]);
                const n = [shared, not_shared[0], not_shared[1]];
                n.sort();
                if (indS.indexOf(n.sort().toString()) !== -1) {
                    // console.log('Already added');
                    continue;
                }
                // indS = s;
                indS.push(n.sort().toString());
                indices.push(n);
                // console.log(shared, not_shared[0], not_shared[1]);
            }

            // for (let k = j + 1; k < edgeIndices.length; k++) {
            //     if (i === k || j === k) continue;
            //     const e3 = edgeIndices[k];
            //     const s = new Set([...e1, ...e2, ...e3]);
            //     if (s.size === 3) {
            //         indices.push([i, j, k]);
            //     }
            // }
        }
    }
    indices.sort();
    console.log(indices);
    const trianglesFlat = new Uint16Array(indices.length);
    for (let i = 0; i < indices.length; i++) {
        trianglesFlat[i * 3] = indices[i][0];
        trianglesFlat[i * 3 + 1] = indices[i][1];
        trianglesFlat[i * 3 + 2] = indices[i][2];
    }
    // Create material
    const faceMaterial = new THREE.MeshToonMaterial({ side: THREE.DoubleSide, vertexColors: true });
    faceMaterial.flatShading = true;
    // Create geometry
    // const faceGeometry = new THREE.BufferGeometry();
    // // Create attributes
    // faceGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    // faceGeometry.setIndex(trianglesFlat);
    // Create the mesh
    // const faceMesh = new THREE.Mesh(faceGeometry, faceMaterial);
    geometry.setIndex(indices.flat());
    const faceMesh = new THREE.Mesh(geometry, faceMaterial);
    // Add the mesh to the scene
    scene.add(faceMesh);
    // scene.add(mesh);
}

// function drawLine() {
//     //create a blue LineBasicMaterial
//     const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
//     const points = [];
//     points.push(new THREE.Vector3(-1, 0, 0));
//     points.push(new THREE.Vector3(0, 1, 0));
//     points.push(new THREE.Vector3(1, 0, 0));
//     const geometry = new THREE.BufferGeometry().setFromPoints(points);
//     const line = new THREE.Line(geometry, material);
//     scene.add(line);
//     return line;
// }

function createTextSprite(message, color) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = '24px Arial';
    context.fillStyle = color;
    context.fillText(message, 0, 24);

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(material);

    // Set the sprite scale
    sprite.scale.set(1, 0.5, 1);

    return sprite;
}

function createTextLabel(text, color) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Make the canvas and context transparent
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.font = '50px Arial';
    context.fillStyle = color;
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
    const geometry = new THREE.PlaneGeometry(1.0, 0.5);
    const label = new THREE.Mesh(geometry, material);

    return label;
}
