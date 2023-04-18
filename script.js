// Get access to the buttons on the webpage
let startBtn = document.getElementById("btn-start");
let stopBtn = document.getElementById("btn-stop");
let resetBtn = document.getElementById("btn-reset");

// initialize required variables
let [hours, min, sec, ms] = [00, 00, 00, 00];
let display = document.getElementById("timer-element1");
let int = null;

// event listner for buttons
startBtn.addEventListener("click", () => {
  if (int !== null) clearInterval(int);
  int = setInterval(stopWatch, 10);
});
stopBtn.addEventListener("click", () => {
  clearInterval(int);
});
resetBtn.addEventListener("click", () => {
  clearInterval(int);
  [hours, min, sec, ms] = [00, 00, 00, 00];
  display.innerHTML = `00<span>Hr</span>:00<span>Min</span>:00<span>Sec</span>`;
});

// The actual funtion to implement stopwatch
function stopWatch() {
  ms += 10;
  if (ms === 1000) {
    ms = 0;
    sec++;
    if (sec === 60) {
      sec = 00;
      min++;
      if (min === 60) {
        min = 00;
        hours++;
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;
  display.innerHTML = `${h}<span>Hr</span>:${m}<span>Min</span>:${s}<span>Sec</span>`;
}
