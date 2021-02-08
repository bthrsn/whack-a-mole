const startCountdown = (duration, display) => {

  // Declare a variable for intervalID
  let cowntdown;
  // Clear all timers
  clearInterval(cowntdown);
  // // Call display 2 times to start countdown immidiately
  // display.textContent = duration;
  
  // Refresh cowntdown every second
  cowntdown = setInterval(() => {
  // Cowntdown stops on zero
    if (duration < 0) {
      clearInterval(cowntdown);
      return
    }
    display.textContent = duration;
    duration--;
    // console.log(duration);
  }, 1000)
}

export default startCountdown;