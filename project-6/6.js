const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

//rgb(83, 83, 83)

function colorGen() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`
};

let bgColorId;

start.addEventListener('click', () => {
  if (!bgColorId) {
    bgColorId = setInterval(() => {
      document.body.style.backgroundColor = colorGen();
    }, 1000);
  }
});

stop.addEventListener('click', () => {
  clearInterval(bgColorId);
  bgColorId = null;
});