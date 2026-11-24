
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

  const seg1 = bootLines.slice(0,13);
  const seg2 = bootLines.slice(13,19);
  const seg3 = bootLines.slice(19,28);
  const seg4 = bootLines.slice(28,31);
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
  outputs.push("Starting STC (TM) Genesis Boot Agent 2.3.1"); //1
  outputs.push("PROGENITOR BIOS"); //2
  outputs.push("PBIOS-2.06.06.00 5D9E5.E7.E8"); //3
  outputs.push("Copyright 2279 Sierra Technological Commission"); //4
  outputs.push("Root (5A8)"); //5
  outputs.push("Fetching System Info..."); //6
  outputs.push("CPU: 6 Cores @ 2.59GHz"); //7
  outputs.push("Mem: 32768 MB"); //8
  outputs.push("Disk Drives: 4"); //9
  outputs.push("Drive 0 (HDD): 477 GB"); //10
  outputs.push("Drive 1 (HDD): 477 GB"); //11
  outputs.push("Drive 2 (SSD): 932 GB"); //12
  outputs.push("Drive 3 (SSD): 932 GB"); //13
  outputs.push("System...                                                  OK"); //14
  outputs.push("Phoenix OS"); //15
  outputs.push("Copyright 2283-2288 Fifield Systems LLC"); //16
  outputs.push("Starting Phoenix Services..."); //17
  outputs.push("Phoenix Service Control...                                 OK"); //18
  outputs.push("Phoenix Security Service...                                OK"); //19
  outputs.push("DIASEC 'Cochise' 8.4.4"); //20
  outputs.push("Cochise Hardware OTP Auth...                               OK"); //21
  outputs.push("Phoenix TLinkPlus User Service...                            OK"); //22
  outputs.push("Phoenix Network Service...                                 OK"); //23
  outputs.push("Pinging Network..."); //24
  outputs.push("Network Discovered (DSN.312-Reno) via Ethernet 0"); //25
  outputs.push("Phoenix OS...                                              OK"); //26
  outputs.push("User Credentials...                                        OK"); //27
  outputs.push("User Session Started"); //28
  outputs.push("Network Auth...                                            OK"); //29
  outputs.push("Defense Switched Network 312. Welcome Online."); //30
}
