// Object with music sounds

const sounds = {
  'A': 'sound_boom.wav',
  'S': 'sound_clap.wav',
  'D': 'sound_hihat.wav',
  'F': 'sound_kick.wav',
  'G': 'sound_openhat.wav',
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

document.getElementById('container');
document.addEventListener('click', activateDiv); // document or container


