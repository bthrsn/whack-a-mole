const SETTINGS = {
  // To start a game you need to make an action (e.g. click on the button) that makes start = true
  start: false,
  // Starting points will change as the games goes on
  points: 0,
  // Points per whacking a mole
  pointsPerMole: 1,
  // Number of holes on the gameboard, if you want change this, you should change styles for holes and moles too
  numberOfHoles: 9,
  // During this period mole will be visible
  peepTime: 0.9,
  // Whole time of one game session
  wholeTime: 15 
};

export default SETTINGS;