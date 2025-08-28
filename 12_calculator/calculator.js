const add = function(x, y) {

  return x + y
	
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(x) {
 let total = 0
  for (let i = 0; i < x.length; i++){
  total += x[i]
  }

  return Number(total)
	
};

const multiply = function(x) {
 let total = 1
  for (let i = 0; i < x.length; i++){
  total *= x[i]
  }

  return Number(total)
};

const power = function(x,y) {

  return x**y
	
};

const factorial = function(x) {

  if (x < 0){
    'ERROR'
  }  else if (x === 0 || x === 1){
    return 1
  } else {}
	
let result = 1
for (let i = 2; i <= x; i++){
  result *= i
}
return result

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
