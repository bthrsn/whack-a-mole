import createGameboard from './modules/createGameboard';
import getRandomItem from './services/getRandomItem';
import startCountdownInSeconds from './services/startCountdownInSeconds';

window.addEventListener('DOMContentLoaded', () => {
  // Объект для статуса игры, подсчета очков и времени и его деструктуризация
  let SETTINGS = {
    start: false,
    points: 0,
    numberOfHoles: 9,
    popUpTime: 1000,
    wholeTime: 15000 
  }
  let {start, points, numberOfHoles, popUpTime, wholeTime} = SETTINGS;
  
  // Создаем игровое поле
  createGameboard('.gameboard', numberOfHoles, 'hole', 'mole');
  
  // Получаем остальные элементы со страницы
  const scoreBlock = document.querySelector('.score'),
        timerBlock = document.querySelector('.timer'),
        holes = document.querySelectorAll('.hole'),
        moles = document.querySelectorAll('.mole'),
        startButton = document.querySelector('.button-start'); 
        
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
      // if (!wholeTime) {
        molePopsUp(time)
      // };
    }, time)
  }
  // molePopsUp(popUpTime); 
  
  // Старт игры
  const startGame = () => {
    start = true;
    scoreBlock.textContent = '0';
    molePopsUp(popUpTime);
    setInterval(startCountdownInSeconds(wholeTime, timerBlock), 1000);
    ;
  }
  
  // Удар крота
  function whackMole(e) {
    points++;
    this.classList.remove('up');
    scoreBlock.textContent = points;
  }
  
  startButton.addEventListener('click', () => startGame());
  moles.forEach(mole => mole.addEventListener('click', (e) => whackMole(e)));

  })
