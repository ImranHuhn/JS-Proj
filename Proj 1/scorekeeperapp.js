// alert("Testing successful"); //initial test

var p1 = document.querySelector("#p1");
var p1Score = 0;
var p1Display = document.querySelector("#p1Display");

var p2 = document.querySelector("#p2");
var p2Score = 0;
var p2Display = document.querySelector("#p2Display");

var rest = document.querySelector("#reset");


// console.log(p1Display); //test

p1.addEventListener("click" , function() {
    // alert("You clicked p2 button"); //test
    p1Score++;
    console.log(p1Score);
    p1Display.textContent = p1Score;
});

p2.addEventListener("click" , function() {
    // alert("You clicked p2 button"); //test
    p2Score++;
    console.log(p2Score);
    p2Display.textContent = p2Score;
});

reset.addEventListener("click" , function() {
    alert("You clicked the reset button");
});