import { VFX } from "vfx-js";

const vfx = new VFX();

const el = document.querySelector(".chaki");

vfx.add(el, {
    shader: "glitch",
    overflow: 5
});