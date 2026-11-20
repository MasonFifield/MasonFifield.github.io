
//set onscreen time
let bootTime = Math.random() * 5000;

if (bootTime < 2000) {
  bootTime += 1500;
}

//do whne page loads
window.addEventListener("load", () => {

  const bootScreen = document.getElementById("boot");

  const boot1 = document.getElementById("boot1");
  const boot2 = document.getElementById("boot2");
  const boot3 = document.getElementById("boot3");
  const boot4 = document.getElementById("boot4");
  const boot5 = document.getElementById("boot5");
  const boot6 = document.getElementById("boot6");
  const boot7 = document.getElementById("boot7");
  const boot8 = document.getElementById("boot8");
  const boot9 = document.getElementById("boot9");
  const boot10 = document.getElementById("boot10");
  const boot11 = document.getElementById("boot11");
  const boot12 = document.getElementById("boot12");
  const boot13 = document.getElementById("boot13");
  const boot14 = document.getElementById("boot14");
  const boot15 = document.getElementById("boot15");

  //make the words and such

  bootTextTimer = Math.random() * 75 + 50;
  segment1(bootTextTimer);
  bootTextTimer = Math.random() * 75 + 50;
  segment2(bootTextTimer);
  bootTextTimer = Math.random() * 75 + 50;
  segment3(bootTextTimer);

  //go away
  setTimeout(() => {
    bootScreen.classList.add("hidden");
  }, bootTime);

});

function segment1(bootTextTimer) {
  setTimeout(() => {
    boot1.innerHTML = "<p>Placeholder1</p>"
  }, bootTextTimer);
}

function segment2(bootTextTimer) {
  setTimeout(() => {
    boot2.innerHTML = "<p>Placeholder2</p>"
  }, bootTextTimer);
}

function segment3(bootTextTimer) {
  setTimeout(() => {
    boot3.innerHTML = "<p>Placeholder3</p>"
  }, bootTextTimer);
}
