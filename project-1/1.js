// const greyBtn = document.querySelector('button:nth-child(1)');
// const whiteBtn = document.querySelector('button:nth-child(2)');
// const blueBtn = document.querySelector('button:nth-child(3)');
// const yellowBtn = document.querySelector('button:nth-child(4)');

// greyBtn.addEventListener('click', () => {
//   document.body.style.backgroundColor = "grey"
// });

// whiteBtn.addEventListener('click', () => {
//   document.body.style.backgroundColor = "white"
// });

// blueBtn.addEventListener('click', () => {
//   document.body.style.backgroundColor = "blue"
// });

// yellowBtn.addEventListener('click', () => {
//   document.body.style.backgroundColor = "yellow"
// });

const allBtn = document.querySelectorAll('.button');

allBtn.forEach((value) => {
  value.addEventListener('click', (e) => {
   if(e.target.id === 'grey'){
    document.body.style.backgroundColor = e.target.id
   }else if(e.target.id === 'white'){
    document.body.style.backgroundColor = e.target.id
   }else if(e.target.id === 'blue'){
    document.body.style.backgroundColor = e.target.id
   }else if(e.target.id === 'yellow'){
    document.body.style.backgroundColor = e.target.id
   }else if(e.target.id === 'purple'){
    document.body.style.backgroundColor = e.target.id
   };
  });
})