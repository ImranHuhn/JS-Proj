/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

//scores
scores = [0,0];
roundScore = 0;
activePlayer = 1;

//dices
// dice = Math.floor(Math.random() * 6) + 1; //use as an event instead
// console.log(dice);

//set
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'
// document.querySelector('#current-' + activePlayer).textContent = dice;

//get
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

document.querySelector('.dice').style.display = 'none';

document.querySelector('#score-0').textContent = '0';
document.querySelector('#score-1').textContent = '0';
document.querySelector('#current-0').textContent = '0';
document.querySelector('#current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click' , function() {
    // 1. random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2.display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3.update the round score if the rolled number is NOT 1

});










