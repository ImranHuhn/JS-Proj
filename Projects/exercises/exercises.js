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

// for (i = 1 ; i <= 3 ; i++) {
//     console.log(i)
//     console.log('Imran Huhn')
// }

// console.log("==================================");

// var fourShows = ['Burn Notice' , 'Grimm' , 'Dragon Ball Z' , 'One Punch Man'];
// var count = 1

// for (count in fourShows) {
//     console.log(fourShows[count])
//     i++;
// }

// console.log("==================================");

// var burnNotice = {
//     name: 'Burn Notice',
//     product: 'DVD',
//     price: 19.99,
// }

// var grimm = {
//     name: 'Grimm',
//     product: 'BluRay',
//     price: 24.99,
// }

// var dragonBallZ = {
//     name: 'Dragon Ball Z',
//     product: 'Action Figure',
//     price: 12.99,
// }

// var onePunchMan = {
//     name: 'One Punch Man',
//     product: 'Manga Book',
//     price: 14.99,
// }

// console.log(burnNotice.name + ' '+ burnNotice.product + ' cost ' + burnNotice.price)
// console.log(grimm.name + ' ' +  grimm.product + ' cost ' + grimm.price)
// console.log(dragonBallZ.name + ' ' +  dragonBallZ.product + ' cost ' + dragonBallZ.price)
// console.log(onePunchMan.name + ' ' +  onePunchMan.product + ' cost ' + onePunchMan.price)



// ======================================
// ======================================
// exercise 6
// ======================================
// ======================================

// while loops only

// var i = -10;
// while (i < 20) {
//     console.log(i)
//     i++;
// }
// console.log('==========================')

// i = 10;
// while (i <= 40) {
//     console.log(i)
//     i += 2;
// }
// console.log('==========================')

// i = 301;
// while (i <= 333) {
//     console.log(i)
//     i+=2;
// }
// console.log('==========================')

// i = 5;
// while (i <= 50) {
//     if (i % 5 == 0 && i % 3 == 0) {
//         console.log(i)
//     }
//     i++;
// }





// ======================================
// ======================================
// exercise 7
// ======================================
// ======================================

//for loop problem set

// for (var i = -10; i < 20; i++) {
//     console.log(i);
// }
// console.log('==========================================')

// for (var i = 10; i <= 40; i+=2) {
//     console.log(i);
// }
// console.log('==========================================')

// for (var i = 300 + 1; i <= 333; i += 2) {
//     console.log(i);
// }
// console.log('==========================================')

// for (var i = 5; i < 50; i++) {
//     if (i % 5 == 0 && i % 3 == 0)
//     console.log(i)
// }


// ======================================
// ======================================
// exercise 8
// ======================================
// ======================================


// var john = {
//     name: 'Johnny Be Good',
//     bill: [124, 48, 268, 180, 42],
//     tipCalc: function() {
//         this.tips = []
//         this.total = []
//         for (var i = 0 ; i < this.bill.length ; i++) {
            
//             var percentage;
//             var bill = this.bill[i];
            
//             if ( bill <= 50 ) {
//                 percentage = .2;
//             } else if ( bill > 50 && bill <= 200 ) {
//                 percentage = .15;
//             } else {
//                 percentage = .1;
//             }

//             this.tips[i] = percentage * bill;
//             this.total[i] = this.tips[i] + bill;

//         }
//     }
// };


// john.tipCalc();
// console.log(john);

// console.log('========================================================');

// var mike = {
//     name: 'Marky Mark',
//     bill: [77, 375, 110, 45],
//     tipCalc: function() {
//         //rules for percentages
//         this.tips = [];
//         this.total = [];
//         for ( var i = 0; i < this.bill.length; i++) {
            
//             var percentage;

//             if (this.bill[i] <= 100 ) {
//                 percentage = .2;
//             } else if (this.bill[i] > 100 && this.bill[i] <= 300) {
//                 percentage = .1;
//             } else {
//                 percentage = .25;
//             }

//             this.tips[i] = percentage * this.bill[i];
//             this.total[i] = this.tips[i] + this.bill[i]; 

//         }
//     }
// }

// mike.tipCalc();
// console.log(mike);

// console.log('========================================================');

// function calcAvg(tips) {
//     var sum = 0;
//     for (var i = 0 ; i < tips.length ; i++) {
//         sum += tips[i];
//     }
//     return sum / tips.length;
// }

// john.average = calcAvg(john.tips);
// mike.average = calcAvg(mike.tips);

// if (john.average > mike.average) {
//     console.log('John paid more tip on average');
// } else if (john.average < mike.average) {
//     console.log('Mike paid more tip on average');
// } else {
//     console.log('John and Mike paid the same amount of tip, on average');
// }




// ======================================
// ======================================
// exercise 9
// ======================================
// ======================================

// // pt1

// function isEven(num) {
//     if (num % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// isEven(4);
// isEven(21);
// isEven(68);
// isEven(333);

// // pt2

// var factorial = function(num) { // num = input variable
//     var result = 1; // result = output variable
//     for (var i = 1 ; i <= num ; i++) {
//         result *= i
//     } 
//     return result
// }


// // pt3

// function kebabToSnake(str) {
//     var newStr = str.replace(/-/g, "_")
//     return newStr
// }

// // kebabToSnake('hello-world') // in console 


// ======================================
// ======================================
// exercise 10
// ======================================
// ======================================

//pt1

// function printReverse(array) {
//     for (var i = array.length - 1 ; i > -1 ; i--) {
//         console.log(array[i])
//     }
// }

// printReverse([1,2,3,4]);


//pt2

// function isUniform(arr) {

//     var compare = arr[0]

//     for (var i = 1 ; i < arr.length ; i++) {
//         if (compare === arr[i]) {
//             continue'
//         } else {
//             console.log("false");
//             return;
//         }
//     } console.log("true");
// }

// console.log('===================')
// isUniform([1,1,1,1])
// console.log('===================')
// isUniform([2,1,1,1])
// console.log('===================')

// pt3

// function sumArray(arr) {
//         var sum = arr[0];
//     for (var i = 1 ; i < arr.length ; i++) {
//         sum += arr[i];
        
//     }   console.log(sum);
// }

// sumArray([1,2,3])
// sumArray([10,3,10,4])
// sumArray([-5,100])

// pt4

// function max(arr) {
//     var largest = arr[0];
//     for (var i = 0 ; i < arr.length ; i++) {
//         if (largest >= arr[i] ) {
//             largest;
//         } else {
//             largest = arr[i];
//         }
//     } console.log(largest)
// }

// max([1,2,3])
// max([10,3,10,4])
// max([-5,100])









// ======================================
// ======================================
// exercise 11
// ======================================
// ======================================

//toggling using DOM manipulation

// alert("CONNECTED!"); //test

// var button = document.querySelector("button");
// var isPurple = false;

// button.addEventListener("click" , function() {
//     // alert("Clicked!"); //success

//     if (isPurple) {
//         document.body.style.background = "white";
//         isPurple = false;
//     } else {
//         document.body.style.background = "purple";
//         isPurple = true;
//     }
    
// });




// ======================================
// ======================================
// exercise 12
// ======================================
// ======================================

// var isPurple = false;

// document.querySelector("button").addEventListener("click", function(){
    
//     if(isPurple){
//         document.body.style.background = "white";
//     } else {
//         document.body.style.background = "purple";
//     }
//     isPurple = !isPurple;
// });

document.querySelector("button").addEventListener("click", function(){
        document.body.classList.toggle("purple");
});

 


