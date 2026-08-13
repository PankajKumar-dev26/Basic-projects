let randomNumber = run();
function run() {
  return Math.round(1 + 98 * Math.random());
}
const prevGuess = document.querySelector('.prevGuess');
const guessRemai = document.querySelector('.guessRemai');
const submit = document.getElementById('submit')
const result = document.querySelector('.result');

let chance = 10;
let prevGuessArr = [];
prevGuess.innerHTML = prevGuessArr;

document.body.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    logic();
  }
});

submit.addEventListener('click', () => {
  logic()
});


function logic() {
  const number = document.getElementById('number');
  if (chance >= 1) {
    if (isNaN(number.value) === false && number.value !== '') {
      chance -= 1;
      result.classList.add('active');
      if (number.value == randomNumber) {
        result.innerHTML = `<span class="win">YOU WIN</span><br>Random Number was ${randomNumber}<br><button class="startOver">Start Again</button>`
        guessRemai.innerHTML = chance;
        prevGuessArr.push(`${getRandomEmoji(emojiArray)}${number.value}`);
        prevGuess.innerHTML = prevGuessArr.map(item => `<li>${item}</li>`).join('|');
        number.value = '';
        number.hidden = true;
        submit.hidden = true;
        guessRemai.innerHTML = chance;
        const startOver = document.querySelector('.startOver');
        startOver.addEventListener('click', () => {
          reset()
        });
      } else {
        let checkHint = hints()
        result.innerHTML = `<span class="wrong">Wrong Answer</span><p class="hint">${checkHint}</p>`
        guessRemai.innerHTML = chance;
        prevGuessArr.push(`${getRandomEmoji(emojiArray)}${number.value}`);
        prevGuess.innerHTML = prevGuessArr.map(item => `<li>${item}</li>`).join('|');
        number.value = '';
      }
    } else if (isNaN(number.value) || number.value === '') {
      result.innerHTML = `Please Enter only NUMBERS`
      number.value = '';
    }
  } else {
    result.innerHTML = `<span class="wrong">YOU LOOSE</span><br><span class="reveal">NUMBER = ${randomNumber}</span><br><button class="startOver">Start Again</button>`
    number.value = '';
    number.hidden = true;
    submit.hidden = true;
    guessRemai.innerHTML = 0;
    const startOver = document.querySelector('.startOver');
    startOver.addEventListener('click', () => {
      reset()
    });
  }

}

const emojiArray = [
  '😀', '😂', '🥰', '😎', '🤔', '🥶', '🤯', '🤠', '🥳', '🤫',
  '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯',
  '🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈',
  '⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱',
  '🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐'
];

function getRandomEmoji(emojis) {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

function reset() {
  chance = 10;
  number.hidden = false;
  submit.hidden = false;
  guessRemai.innerHTML = 10;
  result.innerHTML = '';
  result.classList.remove('active');
  prevGuessArr.length = 0;
  prevGuess.innerHTML = prevGuessArr;
  randomNumber = run();
  console.log(randomNumber);
}

function hints() {
  const hint = document.querySelector('.hint');
  if ((randomNumber - number.value) < 10 && (randomNumber - number.value) > 0) {
    return `Quite Close`
  } else {
    return `Still not Close`
  };
};

console.log(randomNumber);