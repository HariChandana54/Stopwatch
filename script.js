let time = 0;
let stopwatchInterval = null;
let isRunning = false;

function formatTime(t) {
  const hrs = String(Math.floor(t / 3600)).padStart(2, '0');
  const mins = String(Math.floor((t % 3600) / 60)).padStart(2, '0');
  const secs = String(t % 60).padStart(2, '0');
  return [hrs, mins, secs];
}

function updateClock() {
  time++;
  const [hrs, mins, secs] = formatTime(time);
  document.getElementById("hour").textContent = hrs;
  document.getElementById("minute").textContent = mins;
  document.getElementById("second").textContent = secs;
}

function startStopwatch() {
  if (!isRunning) {
    stopwatchInterval = setInterval(updateClock, 1000);
    isRunning = true;
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  isRunning = false;
}

function resetStopwatch() {
  stopStopwatch();
  time = 0;
  const [hrs, mins, secs] = formatTime(time);
  document.getElementById("hour").textContent = hrs;
  document.getElementById("minute").textContent = mins;
  document.getElementById("second").textContent = secs;
  document.getElementById("lapList").innerHTML = "";
}

function recordLap() {
  if (time === 0) return;
  const lapItem = document.createElement("li");
  const lapCount = document.getElementById("lapList").children.length + 1;
  lapItem.textContent = `Lap ${lapCount}: ${formatTime(time).join(":")}`;
  document.getElementById("lapList").appendChild(lapItem);
}

function toggleMode() {
  document.body.classList.toggle("dark");
}
