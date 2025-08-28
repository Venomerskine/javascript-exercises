const convertToCelsius = function(fr) {
  const cel = ((fr - 32) *5)/9
  return Number(cel.toFixed(1))

};

const convertToFahrenheit = function(cel) {
  const fr = parseFloat((cel * 1.8) + 32)
  return Number(fr.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
