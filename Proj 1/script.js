// ======================================
// ======================================
// exercise 4
// ======================================
// ======================================

// var john = {
//     fname : john,
//     mass : 70,
//     height : 5,
//     jBMI: function() {
//         return this.mass / (this.height * this.height);
//     }
// };
// var mike = {
//     fname : mike,
//     mass : 70,
//     height : 5,
//     mBMI: function() {
//         return this.mass / (this.height * this.height);
//     }
// };

// console.log("John has a BMI of " + john.jBMI())
// console.log("Mike has a BMI of " + mike.mBMI())

// if (john.jBMI() > mike.mBMI()) {
//     console.log("John's BMI is greater")
// } else if (john.jBMI() < mike.mBMI()) {
//     console.log("Mike's BMI is greater")
// } else {
//     console.log("Both have the same BMI")
// }


// part 2 of exercise
// console.log("forward:");
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// console.log("reverse:");
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for (var i = john.length; i >= 0; i--) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// ======================================
// ======================================
// exercise 5
// ======================================
// ======================================

for (i = 1 ; i <= 3 ; i++) {
    console.log(i)
    console.log('Imran Huhn')
}

console.log("==================================");

var fourShows = ['Burn Notice' , 'Grimm' , 'Dragon Ball Z' , 'One Punch Man'];
var count = 1

for (count in fourShows) {
    console.log(fourShows[count])
    i++;
}

console.log("==================================");

var burnNotice = {
    name: 'Burn Notice',
    product: 'DVD',
    price: 19.99,
}

var grimm = {
    name: 'Grimm',
    product: 'BluRay',
    price: 24.99,
}

var dragonBallZ = {
    name: 'Dragon Ball Z',
    product: 'Action Figure',
    price: 12.99,
}

var onePunchMan = {
    name: 'One Punch Man',
    product: 'Manga Book',
    price: 14.99,
}

console.log(burnNotice.name + ' '+ burnNotice.product + ' cost ' + burnNotice.price)
console.log(grimm.name + ' ' +  grimm.product + ' cost ' + grimm.price)
console.log(dragonBallZ.name + ' ' +  dragonBallZ.product + ' cost ' + dragonBallZ.price)
console.log(onePunchMan.name + ' ' +  onePunchMan.product + ' cost ' + onePunchMan.price)