
//set onscreen time
let bootTime = Math.random() * 5000;

if (bootTime < 2000) {
  bootTime += 1500;
}

let globalIndex = 0;

//do whne page loads
window.addEventListener("load", () => {

  const bootScreen = document.getElementById("boot");

  const bootLines = [];
  for (let i = 0; i <= 40; i++) {
    bootLines.push(document.getElementById(`boot${i}`))
  }

  const seg1 = bootLines.slice(0,10);
  const seg2 = bootLines.slice(10,20);
  const seg3 = bootLines.slice(20,30);
  const seg4 = bootLines.slice(30,40);

  //make the words and such

  let bootTextTimer = Math.random() * 750 + 50;
  segment1(seg1, bootTextTimer);

  bootTextTimer += (Math.random() * 750 + 50);
  segment2(seg2, bootTextTimer);

  bootTextTimer += (Math.random() * 750 + 50);
  segment3(seg3, bootTextTimer);

  bootTextTimer += (Math.random() * 750 + 50);
  segment4(seg4, bootTextTimer);

  //go away
  setTimeout(() => {
    bootScreen.classList.add("hidden");
  }, bootTime);

});

function segment1(seg, timer) {
  setTimeout(() => {
    seg.forEach((el, index) => {
      globalIndex++;
      if (el) el.innerHTML = `<p>SEGMENT ONE ${globalIndex}</p>`;
    });
  }, timer);
}

function segment2(seg, timer) {
  setTimeout(() => {
    seg.forEach((el, index) => {
      globalIndex++;
      if (el) el.innerHTML = `<p>SEGMENT TWO ${globalIndex}</p>`;
    });
  }, timer);
}

function segment3(seg, timer) {
  setTimeout(() => {
    seg.forEach((el, index) => {
      globalIndex++;
      if (el) el.innerHTML = `<p>SEGMENT THREE ${globalIndex}</p>`;
    });
  }, timer);
}

function segment4(seg, timer) {
  setTimeout(() => {
    seg.forEach((el, index) => {
      globalIndex++;
      if (el) el.innerHTML = `<p>SEGMENT FOUR ${globalIndex}</p>`;
    });
  }, timer);
}
