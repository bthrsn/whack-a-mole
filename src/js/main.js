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
    popUpTime: 1000,
    wholeTime: 2 
  }
  let {start, points, numberOfHoles, popUpTime, wholeTime} = SETTINGS;
  
  // Создаем игровое поле
  createGameboard('.gameboard', numberOfHoles, 'hole', 'mole');
  
  // Получаем остальные элементы со страницы
  const body = document.querySelector('body'),
        scoreBlock = document.querySelector('.score'),
        timerBlock = document.querySelector('.timer'),
        holes = document.querySelectorAll('.hole'),
        moles = document.querySelectorAll('.mole'),
        startButton = document.querySelector('.button-start'),
        mallet = document.querySelector('.mallet');
       
  // Set timer
  timerBlock.textContent = wholeTime.toString();
       
  // // Получаем рандомную hole
  // const randomHole = (holes) => {
  //   const index = Math.floor(Math.random() * numberOfHoles),
  //         hole = holes[index];
  //   console.log(hole);
  // }
  
  // Крот выглядывает из норы
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
  // molePopsUp(popUpTime); 

  // Старт игры
  const startGame = () => {
    start = true;
    scoreBlock.textContent = '0';
    molePopsUp(popUpTime);
    
    // Превращение курсора в молоток
    mallet.classList.remove('invisible');
    body.style.cursor = 'none';
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
      setTimeout(() => start = false, wholeTime * millisecondsInSecond);
    });
    
    // Start timer
    startCountdown(wholeTime, timerBlock);
  }
  
  // Удар крота
  function whackingTheMole(e) {
    points++;
    this.classList.remove('up');
    scoreBlock.textContent = points.toString();
  }
  
  startButton.addEventListener('click', () => startGame());
  moles.forEach(mole => mole.addEventListener('click', (e) => whackingTheMole(e)));

  })
