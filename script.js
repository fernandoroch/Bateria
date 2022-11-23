document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLowerCase());
});

document.querySelector("button").addEventListener("click", () => {
  let valueInput = document.querySelector("input").value;

  if (valueInput !== "") {
    let arreyInput = valueInput.split("");
    composition(arreyInput);
  }
  
  document.querySelector("input").value = ''
});

function playSound(sound) {
  let keySound = document.querySelector(`#s_${sound}`);
  let elementClick = document.querySelector(`div[data-key="${sound}"]`);

  if (keySound) {
    keySound.currentTime = 0;
    keySound.play();
  }

  if (elementClick) {
    elementClick.classList.add("active");

    setTimeout(() => {
      elementClick.classList.remove("active");
    }, 300);
  }
}

function composition(arreyInput) {
  let wait = 0;
  for (let i of arreyInput) {
    setTimeout(() => {
      playSound(`key${i}`);
    }, wait);
    wait += 250;
  }
}
