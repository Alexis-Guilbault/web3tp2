import * as Tone from "tonejs";

var scrollSound = function() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C3", "8n");
    scrollVictoire = true;
};

var AlignSound = function() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("G3", "1n");
    alignVictoire = true;
};

export { scrollSound, AlignSound };