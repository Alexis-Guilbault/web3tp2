import Zdog from "zdog";

const illo = new Zdog.Illustration({
    element: ".zdog-canvas",
    resize: true,
    dragRotate: true
});

new Zdog.Ellipse({
    addTo: illo,
    diameter: 200,
    stroke: 30,
    color: "#0f0",
    backface: "#555"
});

function animate() {
    illo.updateRenderGraph();
    illo.rotate.y += 0.02;
    requestAnimationFrame(animate);
}
animate();