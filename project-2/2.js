const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  bmiCal()
});

function bmiCal() {
  const height = parseInt(document.querySelector('.height-value').value);
  const weight = parseInt(document.querySelector('.weight-value').value);
  const result = document.querySelector('.result');
  result.innerHTML = ''

  if ((height !== '' && weight !== '') && (height > 0 && weight > 0) && (isNaN(height) === false && isNaN(weight) === false)) {
    result.innerHTML = `Your BMI =  ${(weight / ((height ** 2) / 10000)).toFixed(2)}`
  } else {
    if (height === '' || height <= 0 || isNaN(height)) {
      result.innerHTML += `<p>Please give a valid height</p>`
    }
    if (weight === '' || weight <= 0 || isNaN(weight)) {
      result.innerHTML += `<p>Please give a valid weight</p>`
    };
  };
}