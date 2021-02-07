import createGameboard from './modules/createGameboard';
import getRandomItem from './services/getRandomItem';
import startCountdown from './services/startCountdown';

window.addEventListener('DOMContentLoaded', () => {
  //Global variables
  const millisecondsInSecond = 1000;
  // Объект для статуса игры, подсчета очков и времени и его деструктуризация
  let SETTINGS = {
    start: false,
    points: 0,
    numberOfHoles: 9,
    peepTime: 1,
    wholeTime: 10 
  }
  let {start, points, numberOfHoles, peepTime, wholeTime} = SETTINGS;
  
  // Создаем игровое поле
  createGameboard('.gameboard', numberOfHoles, 'hole', 'mole');
  
  // Получаем остальные элементы со страницы
  const body = document.querySelector('body'),
        modalStart = document.querySelector('.modal-start'),
        modalPlayAgain = document.querySelector('.modal-restart'),
        scoreBlock = document.querySelector('.score'),
        timerBlock = document.querySelector('.timer'),
        gameboard = document.querySelector('.gameboard'),
        holes = document.querySelectorAll('.hole'),
        moles = document.querySelectorAll('.mole'),
        startButton = document.querySelector('.button-start'),
        playAgainButton = document.querySelector('.button-restart'),        
        mallet = document.querySelector('.mallet');
       
  // показываем модальное окно, курсор и скрываем игровое поле
  const hideGameboard = () => {
    gameboard.style.display = 'none';
    modalStart.style.display = 'flex';
  }
  // To play one more game
  const playAgain = () => {
    start = false;
    gameboard.style.display = 'none';
    body.style.cursor = 'default';
    mallet.style.display = 'none';
    modalPlayAgain.style.display = 'flex';
  }
  
  // Скрываем игровое поле на начальном экране
  hideGameboard();
  // Set timer
  timerBlock.textContent = wholeTime.toString();
  // Set scoreboard
  scoreBlock.textContent = points.toString();
  // Hide modal Play again
  modalPlayAgain.style.display = 'none';
       
  // // Получаем рандомную hole
  // const randomHole = (holes, numberOfHoles) => {
  //   const index = Math.floor(Math.random() * numberOfHoles),
  //         hole = holes[index];
  //   return hole;
  // }
  
  // Добавляем класс к рандомной hole
  // holes[Math.floor(Math.random() * numberOfHoles)].classList.add('up);
  
  // Mole peeps from the hole
  const molePopsUp = (time) => {
    const hole = getRandomItem(holes, numberOfHoles);
    hole.classList.add('up');
    
    setTimeout(() => {
      hole.classList.remove('up');
      if (start) {
        molePopsUp(time)
      };
    }, time)
  }

  // Старт игры
  const startGame = () => {
    // // Set timer
    // timerBlock.textContent = wholeTime.toString();
    start = true;
    // Set scoreboard
    points = 0;
     
    gameboard.style.display = 'flex';
    modalStart.style.display = 'none';
    body.style.cursor = 'none';
    
    molePopsUp(peepTime * millisecondsInSecond);
    
    // Превращение курсора в молоток
    mallet.style.display = 'block';
    window.addEventListener('mousemove', (e) => {
      mallet.style.top = e.pageY + 'px';
      mallet.style.left = e.pageX + 'px';
    })
    // Анимация молотка при ударе
    window.addEventListener('click', () => {
      mallet.style.animation = 'whack .1s ease';
      // После клика - убираем анимацию и потом вновь добавляем выше
      setTimeout(() => {
        mallet.style.removeProperty('animation');
      }, 100);
      
      // End of the game
      setTimeout(() => playAgain(), wholeTime * millisecondsInSecond);
    });
    
    // Start timer
    startCountdown(wholeTime, timerBlock);
  }
  
  // Удар крота
  const whackingTheMole = (e) => {
    points++;
    e.target.parentNode.classList.remove('up');
    scoreBlock.textContent = points.toString();
    console.log(e.target);
  }
  
  startButton.addEventListener('click', () => startGame());
  playAgainButton.addEventListener('click', () => startGame());
  moles.forEach(mole => mole.addEventListener('click', (e) => whackingTheMole(e)));

  })
