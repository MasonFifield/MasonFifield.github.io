
//set onscreen time
let bootTime = Math.random() * 3500;

if (bootTime <= 1000) {
  bootTime += 1500;
}

let globalIndex = -2;
let outputs = [];

//do whne page loads
window.addEventListener("load", () => {

  const bootScreen = document.getElementById("boot");

  const bootLines = [];
  for (let i = 0; i <= 40; i++) {
    bootLines.push(document.getElementById(`boot${i}`))
  }

  const seg1 = bootLines.slice(0,15);
  const seg2 = bootLines.slice(15,20);
  const seg3 = bootLines.slice(20,30);
  const seg4 = bootLines.slice(30,41);
  initOutputs();

  //make the words and such

  let bootTextTimer = Math.random() * 250 + 50;
  segment(seg1, bootTextTimer);

  bootTextTimer += (Math.random() * 250 + 50);
  segment(seg2, bootTextTimer);

  bootTextTimer += (Math.random() * 500 + 50);
  segment(seg3, bootTextTimer);

  bootTextTimer += 500;
  segment(seg4, bootTextTimer);

  //go away
  setTimeout(() => {
    bootScreen.classList.add("hidden");
  }, bootTime);

});

function segment(seg, timer) {
  setTimeout(() => {
    seg.forEach((el, index) => {
      globalIndex++;
      if (el) {
          el.innerHTML = `<p>${outputs[globalIndex]}</p>`;
      }
    });
  }, timer);
}

function initOutputs() {
  outputs.push("Starting STC (TM) Genesis Boot Agent 2.3.1");
  outputs.push("PROGENITOR BIOS");
  outputs.push("PBIOS-2.06.06.00 5D9E5.E7.E8");
  outputs.push("Copyright 2279 Sierra Technological Commission");
  outputs.push("Root (5A8)");
  outputs.push("Fetching System Info...");
  outputs.push("CPU: 6 Cores @ 2.59GHz");
  outputs.push("Mem: 32768 MB");
  outputs.push("Disk Drives: 4");
  outputs.push("Drive 0 (HDD): 477 GB");
  outputs.push("Drive 1 (HDD): 477 GB");
  outputs.push("Drive 2 (SSD): 932 GB");
  outputs.push("Drive 3 (SSD): 932 GB");
  outputs.push("System...                                                  OK");
  outputs.push("Phoenix OS");
  outputs.push("Copyright 2283-2288 Fifield Systems LLC");
  outputs.push("Starting Phoenix Services...");
  outputs.push("Phoenix Service Control...                                 OK");
  outputs.push("Phoenix Security Service...                                OK");
  outputs.push("DIASEC 'Cochise' 8.4.4");
  outputs.push("Cochise Hardware OTP Auth...                               OK");
  outputs.push("Phoenix TLinkPlus User Service...                            OK");
  outputs.push("Phoenix Network Service...                                 OK");
  outputs.push("Pinging Network...");
  outputs.push("Network Discovered (DSN.312-Reno) via Ethernet 0");
  outputs.push("Phoenix OS...                                              OK");
  outputs.push("User Credentials...                                        OK");
  outputs.push("User Session Started");
  outputs.push("Network Auth...                                            OK");
  outputs.push("Defense Switched Network 312. Welcome Online.");
  outputs.push("");
  outputs.push("");
  outputs.push("");
  outputs.push("");
  outputs.push("");
  outputs.push("");
  outputs.push("");
  outputs.push("");
  outputs.push("");
  outputs.push("");
  outputs.push("");
}
