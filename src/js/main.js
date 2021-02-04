import createGameboard from './services/createGameboard';

window.addEventListener('DOMContentLoaded', () => {
  // Объект для статуса игры, подсчета очков и времени
  const SETTINGS = {
    start: false,
    points: 0,
    time: 15 
  }
  // Задаем количество нор для кротов
  const numberOfHoles = 9; 
  // Создаем игровое поле
  createGameboard('.gameboard', numberOfHoles, 'hole', 'mole');
  
  // Получаем остальные элементы со страницы
  const score = document.querySelector('.score'),
        timer = document.querySelector('.timer'),
        holes = document.querySelectorAll('.hole'),
        moles = document.querySelectorAll('.mole');
  
  console.log(holes);
  console.log(moles);
  console.log(timer);
})
