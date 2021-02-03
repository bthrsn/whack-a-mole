import createGameboard from './services/createGameboard';

window.addEventListener('DOMContentLoaded', () => {
  // Получаем нужные элементы со страницы
  const gameBoard = document.querySelector('.gameboard'),
        score = document.querySelector('.score'),
        timer = document.querySelector('.timer'),
        holes = document.querySelectorAll('.hole'),
        moles = document.querySelectorAll('.mole');

  // Задаем количество нор для кротов
  const numberOfHoles = 9; 
  // Создаем игровое поле
  createGameboard(gameBoard, numberOfHoles, 'hole', 'mole');
})
