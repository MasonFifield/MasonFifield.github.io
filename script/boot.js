
let bootTime = Math.random() * 5000;

if (bootTime < 2000) {
  bootTime += 1500;
}

window.addEventListener("load", () => {

  const bootScreen = document.getElementById("boot");

  setTimeout(() => {
    bootScreen.classList.add("hidden");
  }, bootTime);

});
