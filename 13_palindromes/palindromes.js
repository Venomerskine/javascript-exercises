const palindromes = function (x) {
  const cleaned = x.replace(/[^\w]|_/g, "").toLowerCase()
  const reversed = cleaned.split("").reverse().join("")
  return cleaned ===reversed
};

// Do not edit below this line
module.exports = palindromes;
