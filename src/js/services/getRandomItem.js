const getRandomItem = (items, numberOfItems) => {
  const index = Math.floor(Math.random() * numberOfItems),
        item = items[index];
  return item;
}

export default getRandomItem;