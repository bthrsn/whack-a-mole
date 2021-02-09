import SETTINGS from './services/settings';
import createGameboard from './modules/createGameboard';
import createMallet from './modules/createMallet';
import {audio, whackSound} from './modules/addAudio';
import getRandomItem from './services/getRandomItem';
import startCountdown from './modules/startCountdown';

window.addEventListener('DOMContentLoaded', () => {
  //Global variables
  const millisecondsInSecond = 1000;
  
  // Destructuring settings
  let {start, points, pointsPerMole, numberOfHoles, wholeTime, peepTime} = SETTINGS;
  
  // Create our gameboard
  createGameboard('.gameboard', numberOfHoles, 'hole', 'mole');
  
  // Get all necessary elements from the page;
  const body = document.querySelector('body'),
        modalStart = document.querySelector('.modal-start'),
        infoBlock = document.querySelector('.info'),
        scoreBlock = document.querySelector('.score'),
        timerBlock = document.querySelector('.timer'),
        gameboard = document.querySelector('.gameboard'),
        holes = document.querySelectorAll('.hole'),
        moles = document.querySelectorAll('.mole'),
        startButton = document.querySelector('.button-start'),
        mallet = document.querySelector('.mallet');
        
  // Add audios
  gameboard.append(audio);
    
  // Necessary functions 
  // Show modal and hide gameboard
  const hideGameboard = () => {
    gameboard.style.display = 'none';
    modalStart.style.display = 'flex';
  }
  
  // Show results and play again
  const showResults = () => {
    start = false;
    gameboard.style.display = 'none';
    body.style.cursor = 'default';
    mallet.style.display = 'none';
    modalStart.style.display = 'flex';
    infoBlock.textContent = `Time is over. Your score: ${points} points`;
    startButton.textContent = 'Play again';
    // Music stops
    audio.pause();
  }
  
  // For moles to start peeping from their holes
  const moveMoles = (time) => {
    const hole = getRandomItem(holes, numberOfHoles);
    hole.classList.add('up');
    
    setTimeout(() => {
      hole.classList.remove('up');
      if (start) {
        moveMoles(time)
      };
    }, time)
  }
  
  // Start the game
  const startGame = () => {
    // Change state of the game
    start = true;
    // Set scoreboard
    points = 0;
    scoreBlock.textContent = points.toString();
    
    // Show gameboard and hide starting modal and cursor
    gameboard.style.display = 'flex';
    modalStart.style.display = 'none';
    body.style.cursor = 'none';
    
    // Music starts playing
    audio.play();
    // Moles start to peep
    moveMoles(peepTime * millisecondsInSecond);
    
    // Cursor change to mallet
    createMallet(mallet, 'whack .1s ease');
    
    // Start timer
    startCountdown(wholeTime, timerBlock);

    // End of the game
    // Add 1 to our timer to stop it on 0 second, not on 1 second
    setTimeout(() => showResults(), (wholeTime + 1) * millisecondsInSecond);
  }  
  
  // For moles to react on whacking and score points for it
  const hitTheMole = (e) => {
    // Earn points and display them
    points += pointsPerMole;
    scoreBlock.textContent = points.toString();

    // Mole goes in the whole as soon as we hit it
    e.target.parentNode.classList.remove('up');
    whackSound.play();
  }
  
  // Hide gameboard on the starting screen
  hideGameboard();
  // Set timer
  timerBlock.textContent = wholeTime.toString();
  // Set scoreboard
  scoreBlock.textContent = points.toString();
  
  // Add event listeners to Start button and each mole
  startButton.addEventListener('click', () => startGame());
  moles.forEach(mole => mole.addEventListener('click', (e) => hitTheMole(e)));

});
