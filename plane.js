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

function drawCube() {
    // Cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    return cube;
}

function MatrixGetColumn(matrix, index) {
    // Get the column of a matrix
    return math.squeeze(math.subset(matrix, math.index(math.range(0, 3), index)));
}

function MatrixSetColumn(matrix, index, column) {
    // Set the column of a matrix
    return math.squeeze(math.subset(matrix, math.index(math.range(0, 3), index), column));
}

function MatrixGetRow(matrix, index) {
    // Get the row of a matrix
    return math.squeeze(math.subset(matrix, math.index(index, math.range(0, 3))));
}

function MatrixSetRow(matrix, index, row) {
    // Set the row of a matrix
    return math.squeeze(math.subset(matrix, math.index(index, math.range(0, 3)), row));
}

// Useful Matrix functions using math.js
function Matrix3TranslateToOrigin(T) {
    // Translate the matrix T to the origin
    let T_ = math.clone(T);
    // Get the first vector in T
    const p1 = MatrixGetRow(T_, 0);
    // Subtract p1 from all vectors in T
    for (let i = 0; i < 3; i++) {
        const p = MatrixGetRow(T_, i);
        const sub = math.subtract(p, p1);
        T_ = MatrixSetRow(T_, i, sub);
        // T_ = math.subset(T_, ind, sub);
    }
    return [T_, p1];
}

function ExtendVector3(v) {
    // Extend a 3 Vector for use with Transformation Matrices
    return math.concat(v, [0]);
}

function ExtendPoint3(p) {
    // Extend a 3 Point for use with Transformation Matrices
    return math.concat(p, [1]);
}

function Matrix3Add(a, b) {
    const c = new THREE.Matrix3();
    const c_ = new Array(9);
    const a_ = a.toArray();
    const b_ = b.toArray();
    for (let i = 0; i < 9; i++) {
        c_[i] = a_[i] + b_[i];
    }
    c.fromArray(c_);
    return c;
}

function getTransformationMatrix(T1) {
    // Transform T0 to T1
    const transformation = new THREE.Matrix3();
    const T1_arr = T1.toArray();
    const x4 = T1_arr[0], y4 = T1_arr[1], z4 = T1_arr[2];
    const x5 = T1_arr[3], y5 = T1_arr[4], z5 = T1_arr[5];
    const x6 = T1_arr[6], y6 = T1_arr[7], z6 = T1_arr[8];
    const x5b = x5 - x4, y5b = y5 - y4, z5b = z5 - z4;
    const x6b = x6 - x4, y6b = y6 - y4, z6b = z6 - z4;
    // Compute the cross product of the two vectors in the triangle (x5b, y5b, z5b) and (x6b, y6b, z6b)
    const c1 = (y5b) * (z6b) - (z5b) * (y6b);
    const c2 = (x6b) * (z5b) - (x5b) * (z6b);
    const c3 = (x6b) * (y5b) - (x6b) * (y5b);
    // Compute the cross product of the resulting vector and the vector (x5b, y5b, z5b)
    const d1 = (y5b) * (c3) - (z5b) * (c2);
    const d2 = (c1) * (z5b) - (x5b) * (c3);
    const d3 = (c1) * (y5b) - (c1) * (y5b);
    transformation.set(
        // x6b - r3o2 * (x5b), -x5b, (y5b) * (z6b) - (z5b) * (y6b),
        // y6b - r3o2 * (y5b), -y5b, (x6b) * (z6b) - (x5b) * (z6b),
        // z6b - r3o2 * (z5b), -z5b, (x6b) * (y5b) - (x6b) * (y5b),
        x6b, x5b, d1,
        y6b, y5b, d2,
        z6b, z5b, d3,
    );
    let b_ = [
        x4, y4, z4,
    ];
    b_ = b_.concat(b_).concat(b_);
    let b = new THREE.Matrix3();
    b.fromArray(b_);
    // b = b.transpose();
    // console.log(b)
    return [transformation, b];
}

function getNormalVector(T1) {
    // T1 = math.transpose(T1);
    console.log('---');
    console.log(T1[0]);
    printMatrix(math.subtract(T1[2], T1[0]));
    console.log('---');
    printMatrix(math.subtract(T1[1], T1[0]));
    const normal = math.cross(math.subtract(T1[1], T1[0]), math.subtract(T1[2], T1[0]));
    // Normalize
    const normal_normalized = math.divide(normal, math.norm(normal));
    console.log("Normal", math.norm(normal_normalized));
    return normal_normalized;
}

function matToTransform(T1) {
    const t1 = math.clone(T1);
    printMatrix(t1);
    const T1_normal = getNormalVector(t1);
    printMatrix(T1_normal);
    const center = findTriangleCentroid(t1);
    drawVector(center, T1_normal, 0.1, 0x00ff00);
    // Construct a 4x4 transformation matrix
    const T1_4 = math.identity(4);
    // Set the last column of the matrix to the normal vector
    // T1_4.subset(math.index(math.range(0, 3), 3), math.zeros(3));
    T1_4.subset(math.index(3, math.range(0, 3)), T1_normal);
    // t1.push(T1_normal);
    // let T1_4 = math.concat(t1, math.matrix([[1], [1], [1], [1]]), 1);
    printMatrix(T1_4);
    return T1_4;
}

function getTransformationMatrix2(T0, T1) {
    // Use math.js to compute T1 inverse (we are using 4x4 spatial transformation matrices)
    const T1_4 = matToTransform(T1);
    let T1_4_inv = math.inv(T1_4);
    printMatrix(T1_4_inv);
    const T0_4 = matToTransform(T0);
    let M = math.multiply(T0_4, T1_4_inv);
    return M;
}

function applySpatialTransformation(M, T) {
    // Apply spatial transformation matrix T to matrix M
    // M is a 4x4 matrix
    // T must be converted to the same dimensions as M
    // const T_normal = getNormalVector(T);
    // const t = math.identity(4);
    // // const t = math.ones(4, 4);
    // t.subset(math.index(math.range(0, 3), 3), math.zeros(3));
    // t.subset(math.index(3, math.range(0, 3)), T_normal);
    // t.subset(math.index(math.range(0, 3), math.range(0, 3)), T);
    const t = matToTransform(T);
    console.log('---');
    printMatrix(t);
    const u = math.multiply(M, t);
    printMatrix(u);
    const b = math.subset(u, math.index(3, math.range(0, 3)));
    printMatrix(b);
    const out = math.add(math.subset(u, math.index(math.range(0, 3), math.range(0, 3))), b);
    printMatrix(out);
    // matToTransform(out);
    return out;
}

function printMatrix(matrix, name = undefined) {
    const log = (name, ...args) => name === undefined ? console.log(...args) : console.log(name, ...args);
    if (matrix instanceof math.Matrix) {
        // return console.log(...(matrix.map((value) => value)));
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
        // [
        //     [0.0, 0.0, 0.0],
        //     [1.0, 0.0, 0.0],
        //     [1 / 2, 0.0, Math.sqrt(3) / 2],
        // ],
        // [
        //     [0.0, 0.0, 0.0],
        //     [1.0, 0.0, 0.0],
        //     [1 / 2, -Math.sqrt(3) / 2, 0.0],
        // ],
    ];
    // triangles.map((triangle) => math.matrix(triangle));
    // console.log(triangles.toString());
    // console.log(triangles[0]);
    // triangles.forEach((triangle) => triangle.forEach((vertex) => console.log(vertex)));
    triangles = triangles.map((triangle) => math.transpose(triangle));
    triangles.forEach((triangle, i) => printMatrix(triangle, `triangle_${i}`));

    // const U = math.identity(3);
    // // const U = triangles[1];
    // // const [Q, b] = Matrix3TranslateToOrigin(math.subtract(triangles[1], triangles[0]));
    // const [Q, b] = Matrix3TranslateToOrigin(triangles[1]);
    // // const [Q, b] = Matrix3TranslateToOrigin(math.identity(3));
    // printMatrix(Q, 'Q');
    // printMatrix(b, 'b');
    // // Compute R - the rotation matrix
    // // R = Q*inv(U)
    // const U_inv = math.inv(U); // This is still the identity matrix
    // printMatrix(U_inv, 'U_inv');
    // const R = math.multiply(Q, U_inv);
    // printMatrix(R, 'R');
    // // Create the translation matrix using b = p1
    // // M = [R, b; 0, 0, 0, 1]
    // let M = math.identity(4);
    // // Insert R into M
    // M = math.subset(M, math.index(math.range(0, 3), math.range(0, 3)), R);
    // // Insert b into M
    // M = math.subset(M, math.index(math.range(0, 3), 3), b);
    // printMatrix(M, 'M');

    // Let's try this again, but try to get the transformation matrix as the inverse of 4 vectors in the triangle, along with their centroid
    // M = P * inv(Q)
    // P = [p1, p2, p3, centroid_0; 0, 0, 0, 1]
    // Q = [p1, p2, p3, centroid_1; 0, 0, 0, 1]
    // const P = [
    //     ExtendPoint3(MatrixGetColumn(triangles[0], 0)),
    //     ExtendPoint3(MatrixGetColumn(triangles[0], 1)),
    //     ExtendPoint3(MatrixGetColumn(triangles[0], 2)),
    //     ExtendPoint3(findTriangleCentroid(triangles[0]))
    // ];
    // const Q = [
    //     ExtendPoint3(MatrixGetColumn(triangles[1], 0)),
    //     ExtendPoint3(MatrixGetColumn(triangles[1], 1)),
    //     ExtendPoint3(MatrixGetColumn(triangles[1], 2)),
    //     ExtendPoint3(findTriangleCentroid(triangles[1]))
    // ];
    printMatrix(math.column(triangles[0], 0));
    console.log(math.subtract(math.flatten(math.column(triangles[0], 1)), math.flatten(math.column(triangles[0], 0))));
    printMatrix(math.cross(
        math.subtract(
            math.flatten(
                math.column(triangles[1], 1)
            ),
            math.flatten(
                math.column(triangles[1], 0)
            )
        ), 
        math.subtract(
            math.flatten(
                math.column(triangles[1], 2)
            ),
            math.flatten(
                math.column(triangles[1], 0)
            )
        )));
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
        // [1, 1, 1,
            0],
        // [1, 0, 0, 0]
        // [1, 1, 1, 1],
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
        // [1, 1, 1,
            0],
        // [1, 0, 0, 0]
        // [1, 1, 1, 1],
    ]);
    printMatrix(P, 'P');
    printMatrix(Q, 'Q');
    // Computer inverse of Q
    const P_inv = math.inv(P);
    const Q_inv = math.inv(Q);
    printMatrix(Q_inv, 'Q_inv');
    // Compute M
    // let M = math.multiply(P, Q_inv);
    let M = math.multiply(Q, P_inv);
    printMatrix(M, 'M');

    const T1 = math.transpose([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ]);
    // const T1 = math.clone(triangles[0]);
    triangles.push(T1);
    // Now we would like to apply the transformation to the above triangle
    // let T1_ = math.identity(4);
    let T1_ = math.transpose([
        [...math.flatten(math.column(T1, 0)), 1],
        [...math.flatten(math.column(T1, 1)), 1],
        [...math.flatten(math.column(T1, 2)), 1],
    ]);
    // Insert 1's into the last column of T1_
    // T1_ = math.subset(T1_, math.index(math.range(0, 3), 3), math.ones(3));
    // Insert T1 into T1_
    // T1_ = math.subset(T1_, math.index(math.range(0, 3), math.range(0, 3)), T1);
    printMatrix(T1_, 'T1_');
    // T1_ = T1_.map((e) => ExtendPoint3(e));
    // printMatrix(T1_, 'T1_');
    let T2 = math.multiply(M, T1_);
    printMatrix(T2, 'T2');
    T2 = math.subset(T2, math.index(math.range(0, 3), math.range(0, 3)));
    printMatrix(T2, 'T2');
    // triangles.push(math.transpose(T2));
    triangles.push(T2);

    // console.log(ExtendVector3([1, 2, 3]))
    // console.log(ExtendPoint3([1, 2, 3]))

    // const T0 = triangles[0];
    // // const T1 = triangles[1];
    // const T1 = [
    //     [0, 0, 0],
    //     [1, 0, 0],
    //     [0, 1, 0],
    // ];
    // triangles.push(T1);
    // // Transform T0 to T1
    // const transformation = getTransformationMatrix2(triangles[0], triangles[1]);
    // const T3 = applySpatialTransformation(transformation, T1);
    // triangles.push(T3._data);

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

    // drawVector([1, 1, 1], [0, 0, 0], 0x00ff00);

    // const [transformation, b] = getTransformationMatrix(T1.clone().transpose());
    // console.log(transformation.toArray());
    // let T2 = new THREE.Matrix3();
    // T2 = T0.clone();
    // T2.set(
    //     0, 0, 0,
    //     1, 0, 0,
    //     0, 1, 0,
    // );
    // triangles.push(T2.clone());
    // T2 = T2.transpose();
    // console.log(T2.toArray());
    // T2 = T2.premultiply(transformation);
    // console.log(T2.toArray());
    // T2 = Matrix3Add(T2, b);
    // console.log(T2.toArray());
    // T2 = T2.transpose();
    // console.log(T2.toArray());
    // triangles.push(T2);

    // const transformation = getTransformationMatrix(T2, T1);
    // T2.applyMatrix4(transformation);
    // triangles.push(T2);

}

function findTriangleCentroid(triangle) {
    // Find the centroid of a triangle
    // printMatrix(triangle, 'triangle');
    // printMatrix(math.flatten(math.column(triangle, 0)), 'skjdf')
    const centroid = math.multiply(math.add(math.flatten(math.column(triangle, 0)), math.flatten(math.column(triangle, 1)), math.flatten(math.column(triangle, 2))), 1 / 3);
    // printMatrix(centroid, 'centroid');
    return centroid;
}

function drawVector(origin, direction, length, color = 0xff0000) {
    // Convert the origin and direction to THREE.Vector3
    const originVector = new THREE.Vector3(...origin);
    let directionVector = new THREE.Vector3(...direction);

    // Normalize the direction vector to get a unit vector
    directionVector.normalize();

    // Scale the direction vector to the desired length
    directionVector.multiplyScalar(length);

    // Calculate the end point by adding the scaled direction vector to the origin
    const endPoint = originVector.clone().add(directionVector);

    // Create a line geometry from the origin to the end point
    const geometry = new THREE.BufferGeometry().setFromPoints([originVector, endPoint]);

    // Create a line material
    const material = new THREE.LineBasicMaterial({ color });

    // Create a line and add it to the scene
    const line = new THREE.Line(geometry, material);
    scene.add(line);
}

// function drawVector(vector, origin, color) {
//     origin = origin || [0, 0, 0];
//     color = color || 0xff0000;

//     // Calculate direction and length of the vector
//     const direction = math.subtract(vector, origin);
//     const length = math.norm(direction);

//     // Normalize the direction
//     const normalizedDirection = math.divide(direction, length);

//     // Create a quaternion for the rotation
//     const quaternion = new THREE.Quaternion();
//     quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(...normalizedDirection));

//     // Create a cylinder to represent the vector
//     const cylinderGeometry = new THREE.CylinderGeometry(0.01, 0.01, length, 8, 1, false);
//     const cylinderMaterial = new THREE.MeshBasicMaterial({color: color});
//     const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);

//     // Rotate and position the cylinder
//     cylinder.applyQuaternion(quaternion);
//     cylinder.position.set(...math.add(origin, math.multiply(direction, 0.5)));

//     // Create a cone to represent the vector's direction
//     const coneGeometry = new THREE.ConeGeometry(0.02, 0.2, 8);
//     const coneMaterial = new THREE.MeshBasicMaterial({color: color});
//     const cone = new THREE.Mesh(coneGeometry, coneMaterial);

//     // Rotate and position the cone
//     cone.applyQuaternion(quaternion);
//     cone.position.set(...vector);

//     // Add the cylinder and cone to the scene
//     scene.add(cylinder);
//     scene.add(cone);
// }


// function gramSchmidtOrthogonalize(a, b, c) {
//     // Normalize first vector
//     a.normalize();

//     // Subtract projection of b onto a from b
//     b.sub(a.clone().multiplyScalar(a.dot(b))).normalize();

//     // Subtract projection of c onto a and projection of c onto b from c
//     c.sub(a.clone().multiplyScalar(a.dot(c))).sub(b.clone().multiplyScalar(b.dot(c))).normalize();

//     return [a, b, c];
// }

// function getColumn(matrix, index) {
//     let startIndex = index * 4;
//     return new THREE.Vector3(matrix.elements[startIndex], matrix.elements[startIndex + 1], matrix.elements[startIndex + 2]);
// }

// function getTransformationMatrix(T0, T1) {
//     // Get the vertices of T0 and T1
//     let v0 = [getColumn(T0, 0), getColumn(T0, 1), getColumn(T0, 2)];
//     let v1 = [getColumn(T1, 0), getColumn(T1, 1), getColumn(T1, 2)];

//     // Translate the vertices so that the first vertex is at the origin
//     for (let i = 1; i < 3; i++) {
//         v0[i].sub(v0[0]);
//         v1[i].sub(v1[0]);
//     }

//     // Orthogonalize the vectors
//     v0 = gramSchmidtOrthogonalize(v0[1], v0[2]);
//     v1 = gramSchmidtOrthogonalize(v1[1], v1[2]);

//     // Create 4x4 transformation matrix
//     let transformation = new THREE.Matrix4();

//     // Set rotation/reflection components
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             transformation.elements[i + 4*j] = v1[i].dot(v0[j]);
//         }
//     }

//     // Set translation components
//     transformation.elements[12] = v1[0].x - v0[0].x;
//     transformation.elements[13] = v1[0].y - v0[0].y;
//     transformation.elements[14] = v1[0].z - v0[0].z;

//     return transformation;
// }
