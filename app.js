const celsiusInput = document.querySelector('#CelsiusInput');
const fahrenheitInput = document.querySelector('#FahrenheitInput');
const celsiusCard = document.querySelector('.celsius-card');
const fahrenheitCard = document.querySelector('.fahrenheit-card');
const celsiusOutput = document.querySelector('#Celsius-output');
const fahrenheitOutput = document.querySelector('#Fahrenheit-output')

celsiusCard.style.display = 'none';
fahrenheitCard.style.display = 'none';

// conversion calculations

const convertCelsiusToFahrenheit = (celsiusUnit) => {
  return (celsiusUnit * 1.8) + 32;
};

const convertFahrenheitToCelsius = (FahrenheitUnit) => {
  return (FahrenheitUnit - 32) * 5/9;
}

// end conversion calculations


celsiusInput.addEventListener('input', (e) => {
  celsiusCard.style.display = 'block';
  let userUnit = e.target.value;
  if(userUnit === '') {
    celsiusCard.style.display = 'none';
  };

  let answer = convertCelsiusToFahrenheit(userUnit).toString();
  answer = answer.slice(0, (answer.indexOf("."))+3);
  answer = Number(answer);
  celsiusOutput.innerHTML = answer  + ' &#8457;';
});

fahrenheitInput.addEventListener('input', (e) => {
  fahrenheitCard.style.display = 'block';
  let userUnit = e.target.value;
  if(userUnit === '') {
    fahrenheitCard.style.display = 'none';
  };
  
  let answer = convertFahrenheitToCelsius(userUnit).toString();
  answer = answer.slice(0, (answer.indexOf("."))+3);
  answer = Number(answer);
  fahrenheitOutput.innerHTML = answer  + ' &#8451;';
});