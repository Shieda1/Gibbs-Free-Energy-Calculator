// https://calculator.swiftutors.com/gibbs-free-energy-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const gibbsFreeEnergyRadio = document.getElementById('gibbsFreeEnergyRadio');
const sumofEnthalpyRadio = document.getElementById('sumofEnthalpyRadio');
const productofTemperatureRadio = document.getElementById('productofTemperatureRadio');
const entropyRadio = document.getElementById('entropyRadio');

let gibbsFreeEnergy;
let sumofEnthalpy = v1;
let productofTemperature = v2;
let entropy = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

gibbsFreeEnergyRadio.addEventListener('click', function() {
  variable1.textContent = '(H) Sum of Enthalpy (Kj)';
  variable2.textContent = '(T) Product of Temperature (K)';
  variable3.textContent = '(S) Entropy (Kj)';
  sumofEnthalpy = v1;
  productofTemperature = v2;
  entropy = v3;
  result.textContent = '';
});

sumofEnthalpyRadio.addEventListener('click', function() {
  variable1.textContent = '(G) Gibbs Free Energy (Kj)';
  variable2.textContent = '(T) Product of Temperature (K)';
  variable3.textContent = '(S) Entropy (Kj)';
  gibbsFreeEnergy = v1;
  productofTemperature = v2;
  entropy = v3;
  result.textContent = '';
});

productofTemperatureRadio.addEventListener('click', function() {
  variable1.textContent = '(G) Gibbs Free Energy (Kj)';
  variable2.textContent = '(H) Sum of Enthalpy (Kj)';
  variable3.textContent = '(S) Entropy (Kj)';
  gibbsFreeEnergy = v1;
  sumofEnthalpy = v2;
  entropy = v3;
  result.textContent = '';
});

entropyRadio.addEventListener('click', function() {
  variable1.textContent = '(G) Gibbs Free Energy (Kj)';
  variable2.textContent = '(H) Sum of Enthalpy (Kj)';
  variable3.textContent = '(T) Product of Temperature (K)';
  gibbsFreeEnergy = v1;
  sumofEnthalpy = v2;
  productofTemperature = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(gibbsFreeEnergyRadio.checked)
    result.textContent = `Gibbs Free Energy = ${computeGibbsFreeEnergy().toFixed(2)} Kj`;

  else if(sumofEnthalpyRadio.checked)
    result.textContent = `Sum of Enthalpy = ${computeSumofEnthalpy().toFixed(2)} Kj`;

  else if(productofTemperatureRadio.checked)
    result.textContent = `Product of Temperature = ${computeProductofTemperature().toFixed(2)} K`;

  else if(entropyRadio.checked)
    result.textContent = `Entropy = ${computeEntropy().toFixed(2)} Kj`;
})

// calculation

function computeGibbsFreeEnergy() {
  return Number(sumofEnthalpy.value) - (Number(productofTemperature.value) * Number(entropy.value));
}

function computeSumofEnthalpy() {
  return Number(gibbsFreeEnergy.value) + (Number(productofTemperature.value) * Number(entropy.value));
}

function computeProductofTemperature() {
  return (Number(sumofEnthalpy.value) - Number(gibbsFreeEnergy.value)) / Number(entropy.value);
}

function computeEntropy() {
  return (Number(sumofEnthalpy.value) - Number(gibbsFreeEnergy.value)) / Number(productofTemperature.value);
}