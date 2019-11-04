/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();
//scores
// scores = [0,0];
// roundScore = 0;
// activePlayer = 0;

//dices
// dice = Math.floor(Math.random() * 6) + 1; //use as an event instead
// console.log(dice);

//set
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'
// document.querySelector('#current-' + activePlayer).textContent = dice;

//get
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

// document.querySelector('.dice').style.display = 'none';

// document.querySelector('#score-0').textContent = '0';
// document.querySelector('#score-1').textContent = '0';
// document.querySelector('#current-0').textContent = '0';
// document.querySelector('#current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click' , function() {
    if (gamePlaying) {
        // 1. random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2.display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //3.update the round score if the rolled number is NOT 1
        if (dice !== 1) {
            //Add score
            roundScore += dice; // same as roundScore = roundScore + dice
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer()
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        //add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //Check if player won the game
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer()
        }
    }
});

function nextPlayer() {
    //Next player
    // if(activePlayer === 0) {
    //     activePlayer = 1;
    // } else {
    //     activePlayer = 0;
    // }
    //same as :
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    roundScore = 0;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
    //same as:
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';

    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
};


