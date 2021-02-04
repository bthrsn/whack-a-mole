const createGameboard = (parentElementClass, numberOfChildElements, childClass, subchildClass) => {
  // Получаем родительский элемент со страницы
  const parentElement = document.querySelector(parentElementClass);
  // Добавляем игровые ячейки по количеству детей этого элемента
  for (let i = 1; i <= numberOfChildElements; i++) {
    parentElement.insertAdjacentHTML('beforeend', 
      `<div class="${childClass} ${childClass}${i}">
        <div class="${subchildClass}"></div>
      </div>`
    )
  }
}

export default createGameboard;