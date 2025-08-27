const sumAll = function(first, last) {

    let nums = []
    let total = 0

    if (first < 0 || last < 0 || typeof first !== 'number' || typeof last !== 'number' || !Number.isInteger(first) || !Number.isInteger(last)){
        return 'ERROR'
    }

    let [one, two] = first < last ? [first, last] : [last, first]

    for (let i = one; i <= two; i++){
        nums.push(i)
    }


    for (let i = 0; i < nums.length; i++){
  total += nums[i]
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
