let audio = new Audio();
audio.volume = .25; // Чтобы не испугать пользователя

document.querySelector('#play').addEventListener('click', function(e){
  if(e.target.value === 'Привет, Матвей!') {
    e.target.value = 'Привет, Матвей!▶';
    audio.src = e.target.getAttribute('data-url');
    audio.play();
  } else {
    e.target.value = 'Привет, Матвей!';
    audio.currentTime = 0;
    audio.pause();
  }
});

document.querySelector('#play2').addEventListener('click', function(e){
    if(e.target.value === '1 8 2') {
      e.target.value = '▶';
      audio.src = e.target.getAttribute('data-url');
      audio.play();
    } else {
      e.target.value = '1 8 2';
      audio.currentTime = 0;
      audio.pause();
    }
  });

  document.querySelector('#play3').addEventListener('click', function(e){
    if(e.target.value === '5 9 8') {
      e.target.value = '▶';
      audio.src = e.target.getAttribute('data-url');
      audio.play();
    } else {
      e.target.value = '5 9 8';
      audio.currentTime = 0;
      audio.pause();
    }
  });

  document.querySelector('#play4').addEventListener('click', function(e){
    if(e.target.value === '7 3 4') {
      e.target.value = '▶';
      audio.src = e.target.getAttribute('data-url');
      audio.play();
    } else {
      e.target.value = '7 3 4';
      audio.currentTime = 0;
      audio.pause();
    }
  });

  document.querySelector('#play5').addEventListener('click', function(e){
    if(e.target.value === '6 2 1') {
      e.target.value = '▶';
      audio.src = e.target.getAttribute('data-url');
      audio.play();
    } else {
      e.target.value = '6 2 1';
      audio.currentTime = 0;
      audio.pause();
    }
  });

  document.querySelector('#play6').addEventListener('click', function(e){
    if(e.target.value === '1 1 9') {
      e.target.value = '▶';
      audio.src = e.target.getAttribute('data-url');
      audio.play();
    } else {
      e.target.value = '1 1 9';
      audio.currentTime = 0;
      audio.pause();
    }
  });
