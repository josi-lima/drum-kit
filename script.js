// Object with music sounds

const sounds = {
  'A': 'sound_openhat.wav',
  'S': 'sound_clap.wav',
  'D': 'sound_hihat.wav',
  'F': 'sound_kick.wav',
  'G': 'sound_boom.wav',
  'H': 'sound_ride.wav',
  'J': 'sound_snare.wav',
  'K': 'sound_kalimba.wav',
  'L': 'sound_tink.wav'
}

// function to create the music-key buttons

const createDiv = (text) => {
  const div = document.createElement('div');
  div.classList.add('key');
  div.textContent = text;
  div.id = text;
  document.getElementById('container').appendChild(div);
}

// function to put sounds inside the music-key buttons

const display = (sounds) => Object.keys(sounds).forEach(createDiv);

display(sounds);

// function to activate the music-key buttons

const activateDiv = (e) => {
  
  let letter = '';
  if (e.type == 'click') {
    letter = e.target.id;
  } else {
    letter = e.key.toUpperCase();
  }
  // const letter = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase();
  playSounds(letter);
}

// function to add animation effects to the music-key buttons

const addEffects = (letter) => {
  document.getElementById(letter).classList.toggle('playing');
}

// function to remove animation effects from the music-key buttons

const removeEffects = (letter) => {
  const effect = document.getElementById(letter);
  const removePlaying = () => effect.classList.remove('playing');
  effect.addEventListener('transitionend', removePlaying);
}

// function to play sounds

const playSounds = (letter) => {
  const audio = new Audio(`./sounds/${sounds[letter]}`);
  
  const validLetter = sounds.hasOwnProperty(letter);
  if (validLetter) {
    addEffects(letter);
    audio.play();
    removeEffects(letter)
  }
}

window.addEventListener('keydown', activateDiv);

document.getElementById('container').addEventListener('click', activateDiv); 
