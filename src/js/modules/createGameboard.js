const createGameboard = (parentElementClass, numberOfChildElements, childClass, subchildClass) => {
  // Get parent element from the page
  const parentElement = document.querySelector(parentElementClass);
  // Add as much cells as amount of children indicated in numberOfChildElements variable
  for (let i = 1; i <= numberOfChildElements; i++) {
    parentElement.insertAdjacentHTML('beforeend', 
      `<div class="${childClass} ${childClass}${i}">
        <div class="${subchildClass}"></div>
      </div>`
    )
  }
}

export default createGameboard;