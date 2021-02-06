const startCountdown = (duration, display) => {
  // const millisecondsInSecond = 1000;
  // let seconds = duration / millisecondsInSecond;
  // Refresh cowntdown every second
  setInterval(() => {
  // Cowntdown stops on zero
    if (duration <= 0) {
      clearInterval( duration = 0)
    }
    display.textContent = duration;
    duration--;
  }, 1000)
}

export default startCountdown;