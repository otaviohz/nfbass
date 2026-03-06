import * as Tone from "tone";


const buttonPlay = document.getElementById("play")!;
const buttonPause = document.getElementById("pause")!;

const synth = new Tone.Synth().toDestination();


buttonPlay.addEventListener("click", async () => {
  console.log("pressed play")
  synth.triggerAttackRelease("c4", "4n")
});
buttonPause.addEventListener("click", async () => {
  console.log("pressed pause")
});
