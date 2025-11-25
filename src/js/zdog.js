import Zdog from "zdog";

const illo = new Zdog.Illustration({
    element: ".zdog-canvas",
    resize: true,
    dragRotate: true
});

new Zdog.Ellipse({
    addTo: illo,
    diameter: 200,
    stroke: 45,
    color: "#0f0"
});

function animate() {
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
}
animate();