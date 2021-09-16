//time
const hourElement = document.querySelector('.hours');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const millisecondElement = document.querySelector('.millisecond');
//button
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const shed = document.querySelector('.shed');
const cleansing = document.querySelector('.cleansing');
//variable
let hours = 00;
let minutes = 00;
let seconds = 00;
let milliseconds = 00;
let interval;
start.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);

});
stop.addEventListener('click', () => {
  clearInterval(interval);
});
shed.addEventListener('click', () => {
  clearInterval(interval);
  createElement();
  zeroedElem();
  interval = setInterval(startTimer, 10);
})
cleansing.addEventListener('click', () => {
  const delEl = document.querySelector('.results__title');
  delEl.parentElement.replaceChildren(delEl);
});
function startTimer() {
  milliseconds++;
  millisecondElement.innerText = milliseconds < 9 ? '0' + milliseconds : milliseconds;
  if (milliseconds > 99) {
    seconds++;
    secondElement.innerText = '0' + seconds;
    milliseconds = 0;
  }
  secondElement.innerText = seconds < 10 ? '0' + seconds : seconds;
  if (seconds > 59) {
    minutes++;
    minuteElement.innerText = '0' + minutes;
    seconds = 0;
  }
  minuteElement.innerText = minutes < 10 ? '0' + minutes : minutes;
  if (minutes > 59) {
    hours++;
    hourElement.innerText = '0' + hours;
    minutes = 0;
  }
  hourElement.innerText = hours < 10 ? '0' + hours : hours;
}

function zeroedElem() {
  hours = 00;
  hourElement.innerText = '0' + hours;
  minutes = 00;
  minuteElement.innerText = '0' + minutes;
  seconds = 00;
  secondElement.innerText = '0' + seconds;
  milliseconds = 00;
  millisecondElement.innerText = '0' + milliseconds;
}
function createElement() {
  const HTMLelem = document.querySelector('.stopWatch__results');
  const newHTMLelem = document.createElement('span');
  newHTMLelem.className = 'spanTitle';
  let zHours = hours < 9 ? '0' + hours : hours;
  let zminutes = minutes < 9 ? '0' + minutes : minutes;
  let zseconds = seconds < 9 ? '0' + seconds : seconds;
  let zmilliseconds = milliseconds < 9 ? '0' + milliseconds : milliseconds;
  newHTMLelem.textContent = `${zHours}:${zminutes}:${zseconds}:${zmilliseconds}`;
  HTMLelem.append(newHTMLelem);
}