// alert("Testing successful"); //initial test

var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var resetbtn = document.querySelector("#reset");
var numInput = document.querySelector("input[type = 'number']")
var rounds = document.querySelector("p .rounds")
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var gameOver = false;
var winningScore = 5;

// console.log(p1Display); //test

p1.addEventListener("click" , function() {
    // alert("You clicked p2 button"); //test
    if (!gameOver) {
        p1Score++;
        console.log(p1Score);
        p1Display.textContent = p1Score;
        if (p1Score === winningScore) {
            gameOver = true;
            p1Display.classList.add("winner");
            p2Display.classList.add("loser");
        }
    }
});

p2.addEventListener("click" , function() {
    // alert("You clicked p2 button"); //test
    if (!gameOver){
        p2Score++;
        console.log(p2Score);
        p2Display.textContent = p2Score;
        if (p2Score === winningScore) {
            gameOver = true;
            p2Display.classList.add("winner");
            p1Display.classList.add("loser");
        }
    }
});

resetbtn.addEventListener("click" , function() {
    // alert("You clicked the reset button"); //test
    // p1Score = 0;
    // p2Score = 0;
    // console.log(p1Score + " to " + p2Score);
    // p1Display.textContent = p1Score;
    // p2Display.textContent = p2Score;
    // p1Display.classList.remove("winner");
    // p2Display.classList.remove("winner");
    // p1Display.classList.remove("loser");
    // p2Display.classList.remove("loser");
    // gameOver = false;
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    console.log(p1Score + " to " + p2Score);
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    p1Display.classList.remove("loser");
    p2Display.classList.remove("loser");
    gameOver = false;
}

numInput.addEventListener("change", function() { //"change" DOM event listener will activate function not just when it is being clicked, but when it is typed into
    // console.log("changed the input"); //testing
    // rounds.textContent = "value changed"; //test
    rounds.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
});