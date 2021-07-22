document.addEventListener("keyup", function (event) {
  console.log("event");
  if (event.key === "w") {
    wDrum();
  }
  if (event.key === "a") {
    aDrum();
  }
  if (event.key === "s") {
    sDrum();
  }
  if (event.key === "d") {
    dDrum();
  }
  if (event.key === "j") {
    jDrum();
  }
  if (event.key === "k") {
    kDrum();
  }
  if (event.key === "l") {
    lDrum();
  }
});

function wDrum() {
  //   console.log(`w Drum`);
  let audio = new Audio("sounds/tom-1.mp3");
  audio.play();
}

function aDrum() {
  //   console.log(`a Drum`);
  let audio = new Audio("sounds/tom-2.mp3");
  audio.play();
}

function sDrum() {
  //   console.log(`s Drum`);
  let audio = new Audio("sounds/tom-3.mp3");
  audio.play();
}

function dDrum() {
  //   console.log(`d Drum`);
  let audio = new Audio("sounds/tom-4.mp3");
  audio.play();
}

function jDrum() {
  //   console.log(`j Drum`);
  let audio = new Audio("sounds/snare.mp3");
  audio.play();
}

function kDrum() {
  //   console.log(`k Drum`);

  let audio = new Audio("sounds/kick-bass.mp3");
  audio.play();
}

function lDrum() {
  //   console.log(`l Drum`);
  let audio = new Audio("sounds/crash.mp3");
  audio.play();
}
