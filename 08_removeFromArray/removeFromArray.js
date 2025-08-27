const removeFromArray = function(array, ...args) {
    let final = []
    for (let i = 0; i < array.length; i++){
        if(!args.includes(array[i])){
            final.push(array[i])
        }
    }
    
 return final
};

// Do not edit below this line
module.exports = removeFromArray;
