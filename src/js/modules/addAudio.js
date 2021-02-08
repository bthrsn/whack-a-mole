  //Create new audios
  const audio = document.createElement('audio'),
  whackSound = new Audio('../../assets/audio/whack.mp3');
     
  // Audio styles 
  audio.src = '../../assets/audio/background2.mp3';
  audio.volume = 0.3;
  audio.style.display = 'none';
  
  export {audio, whackSound};