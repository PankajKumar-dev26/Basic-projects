const clock = document.querySelector('.clock');

function timeCal() {
  let time = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'});
  clock.innerHTML = time;
}

setInterval(()=> {
  timeCal()
},1000)