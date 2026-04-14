// Temperature converter utility

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
  return celsiusToKelvin(fahrenheitToCelsius(fahrenheit));
}

function kelvinToFahrenheit(kelvin) {
  return celsiusToFahrenheit(kelvinToCelsius(kelvin));
}

function formatConversionMessage(celsius) {
  const fahrenheit = celsiusToFahrenheit(celsius);
  return `${celsius}°C is equivalent to ${fahrenheit.toFixed(2)}°F`;
}

function isValidNumericInput(input) {
  return input !== null && input.trim() !== '' && !Number.isNaN(+input);
}

function convertCelsiusInput(input) {
  if (!isValidNumericInput(input)) {
    return null;
  }
  const celsius = +input.trim();
  return {
    celsius,
    fahrenheit: celsiusToFahrenheit(celsius),
  };
}

function initDomConverter() {
  if (typeof document === 'undefined') {
    return;
  }

  const inputEl = document.getElementById('celsiusInput');
  const button = document.getElementById('convertBtn');
  const resultEl = document.getElementById('result');

  if (!inputEl || !button || !resultEl) {
    return;
  }

  button.addEventListener('click', () => {
    const converted = convertCelsiusInput(inputEl.value);

    if (!converted) {
      resultEl.textContent = 'Please enter a valid numeric temperature.';
      resultEl.style.color = 'red';
      return;
    }

    resultEl.textContent = formatConversionMessage(converted.celsius);
    resultEl.style.color = 'black';
  });
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDomConverter);
  } else {
    initDomConverter();
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    celsiusToFahrenheit,
    fahrenheitToCelsius,
    celsiusToKelvin,
    kelvinToCelsius,
    fahrenheitToKelvin,
    kelvinToFahrenheit,
    formatConversionMessage,
    isValidNumericInput,
    convertCelsiusInput,
  };
}
