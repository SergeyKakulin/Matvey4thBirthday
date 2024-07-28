let audio = new Audio();
audio.volume = .25; // Чтобы не испугать пользователя

document.querySelector('#play').addEventListener('click', function(e){
  if(e.target.value === 'Привет, Матвей!') {
    e.target.value = 'Привет, Матвей!';
    audio.src = e.target.getAttribute('data-url');
    audio.play();
  } else {
    e.target.value = 'Привет, Матвей!';
    audio.currentTime = 0;
    audio.pause();
  }
});

document.querySelector('#play2').addEventListener('click', function(e){
    if(e.target.value === '1') {
      e.target.value = '1';
      audio.src = e.target.getAttribute('data-url');
      audio.play();
    } else {
      e.target.value = '1';
      audio.currentTime = 0;
      audio.pause();
    }
  });

  document.querySelector('#play3').addEventListener('click', function(e){
    if(e.target.value === '2') {
      e.target.value = '2';
      audio.src = e.target.getAttribute('data-url');
      audio.play();
    } else {
      e.target.value = '2';
      audio.currentTime = 0;
      audio.pause();
    }
  });

  document.querySelector('#play4').addEventListener('click', function(e){
    if(e.target.value === '3') {
      e.target.value = '3';
      audio.src = e.target.getAttribute('data-url');
      audio.play();
    } else {
      e.target.value = '3';
      audio.currentTime = 0;
      audio.pause();
    }
  });

  document.querySelector('#play5').addEventListener('click', function(e){
    if(e.target.value === '4') {
      e.target.value = '4';
      audio.src = e.target.getAttribute('data-url');
      audio.play();
    } else {
      e.target.value = '4';
      audio.currentTime = 0;
      audio.pause();
    }
  });

  document.querySelector('#play6').addEventListener('click', function(e){
    if(e.target.value === '5') {
      e.target.value = '5';
      audio.src = e.target.getAttribute('data-url');
      audio.play();
    } else {
      e.target.value = '5';
      audio.currentTime = 0;
      audio.pause();
    }
  });
