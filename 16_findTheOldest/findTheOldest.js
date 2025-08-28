const findTheOldest = function(x) {
     let years = []
for (let i = 0; i < x.length; i++){
    let deathYear = x[i].yearOfDeath ? x[i].yearOfDeath : new Date().getFullYear();
  years.push(deathYear - (x[i].yearOfBirth))
 }

 let oldest = Math.max(...years)

 return x[years.indexOf(oldest)]
};

// Do not edit below this line
module.exports = findTheOldest;
