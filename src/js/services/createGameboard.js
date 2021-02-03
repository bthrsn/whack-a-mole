const createGameboard = (parentElement, numberOfChildElements, childClass, subchildClass) => {

  for (let i = 1; i <= numberOfChildElements; i++) {
    parentElement.insertAdjacentHTML('beforeend', 
      `<div class="${childClass} ${childClass}${i}">
        <div class="${subchildClass}"></div>
      </div>`
    )
  }
}

export default createGameboard;