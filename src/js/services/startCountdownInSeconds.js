const startCountdownInSeconds = (duration, display) => {
  const millisecondsInSecond = 1000;
  let seconds = duration / millisecondsInSecond;
  display.textContent = seconds;
  seconds--;
}

export default startCountdownInSeconds;