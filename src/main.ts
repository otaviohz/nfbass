import * as Tone from "tone";
import { Scale } from "tonal";

const button = document.getElementById("play")!;

button.addEventListener("click", async () => {
  await Tone.start(); // Required on user gesture
  console.log("Audio ready!");

  const synth = new Tone.Synth().toDestination();

  // Choose any scale
  const notes = Scale.get("C major").notes.map(n => n + "4");
  console.log("Playing:", notes);

  // Play each note in sequence
  notes.forEach((note, i) => {
    synth.triggerAttackRelease(
      note,
      "8n",
      Tone.now() + i * .1,
    );
  });
});
