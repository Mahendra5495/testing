// Get access to the buttons
let starting = document.getElementById("start");
let stopBtn1 = document.getElementById("stop");
let resetBtn1 = document.getElementById("reset");
let isFirst = true;

// initialize required variables
let [hrs, mins, secs, milisecs] = [0, 0, 0, 0];
let remainingTime = 0;
console.log(document.getElementById("hours").value);
console.log(hrs, mins, secs);
let int1 = null;
let display1 = document.getElementById("timer-element2");

starting.addEventListener("click", () => {
  if (int1 !== null) clearInterval(int1);
  if (isFirst) {
    getTimeValues();
    isFirst = false;
  }
  int1 = setInterval(timerFunc, 10);
});
stopBtn1.addEventListener("click", () => {
  clearInterval(int1);
});
resetBtn1.addEventListener("click", () => {
  resetAll();
});
function timerFunc() {
  if (remainingTime > 0) {
    milisecs += 10;
    if (milisecs === 1000) {
      milisecs = 0;
      remainingTime--;
      totalMin = Math.floor(remainingTime / 60);
      hrs = Math.floor(totalMin / 60);
      mins = totalMin % 60;
      secs = remainingTime % 60; // get seconds
    }
    let xh = hrs < 10 ? "0" + hrs : hrs;
    let xm = mins < 10 ? "0" + mins : mins;
    let xs = secs < 10 ? "0" + secs : secs;
    display1.innerHTML = `${xh}<span>Hr</span>:${xm}<span>Min</span>:${xs}<span>Sec</span>`;
  }
}
function getTimeValues() {
  hrs = parseInt(document.getElementById("hours").value);
  mins = parseInt(document.getElementById("minutes").value);
  secs = parseInt(document.getElementById("seconds").value);
  hrs = isNaN(hrs) ? 0 : hrs;
  mins = isNaN(mins) ? 0 : mins;
  secs = isNaN(secs) ? 0 : secs;
  remainingTime = hrs * 60 * 60 + mins * 60 + secs;
}
function resetAll() {
  clearInterval(int1);
  let [hrs, mins, secs, milisecs] = [0, 0, 0, 0];
  isFirst = true;
  display1.innerHTML = `00<span>Hr</span>:00<span>Min</span>:00<span>Sec</span>`;
  document.getElementById("hours").value = 0;
  document.getElementById("minutes").value = 0;
  document.getElementById("seconds").value = 0;
}
