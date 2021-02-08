import getRandomItem from '../services/getRandomItem';

  // Mole peeps from the hole
  const moveMoles = (parentElement, numberOfElements, conditionOfMoving, timeOfMoving) => {
    const hole = getRandomItem(parentElement, numberOfElements);
    hole.classList.add('up');
    
    setTimeout(() => {
      hole.classList.remove('up');
      if (conditionOfMoving) {
        moveMoles(timeOfMoving)
      };
    }, timeOfMoving)
  }
  
  export default moveMoles;
