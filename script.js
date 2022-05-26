'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = `correct number!`;
console.log(document.querySelector('.message').textContent);

document.querySelector('.score').textContent = '3';

document.querySelector('.guess').value = 5;
*/

var secretNumber = Math.floor(Math.random()*20) + 1;    //or use Math.trunc()

var score = 20;
var highscore = 0;

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor = '#222222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    secretNumber = Math.floor(Math.random()*20) + 1; 
    score = 20;
    document.querySelector('.score').textContent = score;
});

document.querySelector('.check').addEventListener('click', function(){
    if(score>0){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){ 
        document.querySelector('.message').textContent = `No input provided!!`;
    }
    if(score<=1){   
        document.querySelector('.message').textContent = `You Lost!!`;
        score--;
    }
    else if(guess<secretNumber){
        document.querySelector('.message').textContent = `Too low!!`;
        score--;
    }
    else if(guess>secretNumber){
        score--;
        document.querySelector('.message').textContent = `Too high!!`;
    }
    else{
        document.querySelector('body').style.backgroundColor = '#60c357';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = `Correct Number, well done!!`;
        highscore = Math.max(highscore,score);
        document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('.score').textContent = score;
    }
});

