import { onScroll, animate } from "animejs";
import { scrollSound } from "./tonejs.js";

animate(".boule-scroll", {
    opacity: [1, 0.1],
    alternate: true,
    loop: true,
    duration: 1000,
    autoplay: onScroll({
        container: ".scroll",
        enter: "50% 45%",
        leave: "50% 55%",
    }),
    onLoop: function(anim) {
        scrollSound();
    }
});