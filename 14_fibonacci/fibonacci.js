const fibonacci = function(x) {
    
    x = Number(x)

    if (x < 0) return "OOPS"
    if (x ==0) return 0
    if (x == 1) return 1

    let a = 1, b = 1

   for (let i =2; i < x; i++){
    [a,b] = [b, a + b]
   }
 return b
};

// Do not edit below this line
module.exports = fibonacci;
