const fibonacci = function(x) {
    fib = []

    x = Number(x)

    if (x < 0){
        return "OOPS"
    }  else if (x ==0){
        return 0
    }

    if (x == 1){
        fib = [1]
    } else if (x >= 2){
        fib =[1,1]
    }

    for(let i = 0; i <= x - 3; i++){
        
        num = fib[fib.length -1] + fib[fib.length - 2]
        fib.push(num)
        
    }

    return fib[fib.length - 1]

};

// Do not edit below this line
module.exports = fibonacci;
