let scale = 50;
let v_num = 1;
const RADIUS = 2;
const SIZE = new Point(800, 600);
const ORIGIN = new Point(10, 590);
const FILL_TRIANGLE = "blue";
const FILL_TRIANGLE2 = "green";
const FILL_LINE = "black";
const FILL_POINT = "red";

let canvas = null;
let ctx = null;

function point(origin) {
    // const radius = RADIUS * scale / 50;
    const radius = RADIUS;
    ctx.beginPath();
    origin = origin.mul(scale / Math.max(1, v_num + 1)).add(ORIGIN);
    ctx.arc(origin.x, origin.y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = FILL_POINT;
    ctx.fill();
}

function line(origin, destination) {
    ctx.beginPath();
    origin = origin.mul(scale / Math.max(1, v_num + 1)).add(ORIGIN);
    destination = destination.mul(scale / Math.max(1, v_num + 1)).add(ORIGIN);
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(destination.x, destination.y);
    ctx.strokeStyle = FILL_LINE;
    ctx.stroke();
}

function triangle(origin, a, b, fill) {
    // Draw a filled triangle
    ctx.beginPath();
    origin = origin.mul(scale / Math.max(1, v_num + 1)).add(ORIGIN);
    a = a.mul(scale / Math.max(1, v_num + 1)).add(ORIGIN);
    b = b.mul(scale / Math.max(1, v_num + 1)).add(ORIGIN);
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.fillStyle = fill;
    ctx.fill();
}

// Returns the location of the point for the intersection of 60 degree lines with offsets p and q
function intersect60(p, q) {
    const m = 1.0 / Math.sqrt(3.0);
    const y = (q - p) / 2.0 / m;
    const x = (p + q) / 2.0;
    return new Point(x, y);
}

function generateDomeFace(v) {
    const layers = []; // Array of layers, layers contain their points
    // v is the dome frequency (# of times to subdivide the triange)
    for (let p = 0; p <= v + 1; p++) {
        layers.push([]);
        const layer = layers[p];
        for (let q = 0; q <= v + 1; q++) {
            if (p < q) continue;
            const origin = intersect60(p, q);
            layer.push(origin);
        }
    }
    // Draw the triangles
    for (let p = 0; p < layers.length - 1; p++) {
        // Draw the triangles in the layer to the next layer
        const layer = layers[p];
        const nextLayer = layers[p + 1];
        for (let q = 0; q < nextLayer.length - 1; q++) {
            triangle(layer[q], nextLayer[q], nextLayer[q + 1], FILL_TRIANGLE);
            if (p > q) {
                triangle(layer[q], layer[q + 1], nextLayer[q + 1], FILL_TRIANGLE2)
            }
        }
    }
    // Connect points with lines
    for (let p = 1; p < layers.length; p++) {
        // First connect adjacent points in the same layer
        const layer = layers[p];
        for (let q = 0; q < layer.length - 1; q++) {
            line(layer[q], layer[q + 1]);
        }
        // Now connect each point in previous layer to the current layer (2 new lines each)
        const prevLayer = layers[p - 1];
        for (let q = 0; q < prevLayer.length; q++) {
            line(prevLayer[q], layer[q]);
            line(prevLayer[q], layer[q + 1]);
        }
    }
    // Draw the points on top
    for (let p = 0; p < layers.length; p++) {
        const layer = layers[p];
        for (let q = 0; q < layer.length; q++) {
            point(layer[q]);
        }
    }
}

function init() {
    // Get the v_num input by id
    const range_v = document.querySelector('#range-v-num')
    range_v.onchange = onVChange;
    range_v.value = v_num;
    range_v.focus();
    // Get the scale input by id
    const range_s = document.querySelector('#range-scale')
    rang_s = scale;
    range_s.onchange = onScaleChange;
    // Get the canvas by id "#canvas"
    canvas = document.querySelector("#canvas");
    // Get the canvas context
    ctx = canvas.getContext("2d");
    // Set the canvas width and height
    canvas.width = SIZE.x;
    canvas.height = SIZE.y;
    generateDomeFace(v_num);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function generateDome() {
    clearCanvas();
    generateDomeFace(v_num);
}

function onVChange(e) {
    v_num = parseInt(e.target.value);
    generateDome();
}

function onScaleChange(e) {
    scale = parseInt(e.target.value);
    console.log(scale);
    generateDome();
}

// On window load
window.onload = () => init();
