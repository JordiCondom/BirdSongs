// index.js
const audioPlayer = document.getElementById('audio-player');
const submitButton = document.getElementById('submit-button');
const nextButton = document.getElementById('next-button');
const resultMessage = document.getElementById('result-message');
const birdNameDropdown = document.getElementById('bird-name');
const showResultButton = document.getElementById('show-solution-button');
const levelSelect = document.getElementById('level-select');


let currentSound = null
let all_sounds = []
let intermig = []
let facils = []
let current_level = null

fetch('birds.json')
  .then(response => response.json())
  .then(data => {
    console.log("Json retrieved properly")
    all_sounds = data["all_sounds"]
    intermig = data["intermig"]
    facils = data["facils"]
    starter_sounds = data["starter"]

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    current_level = urlParams.get('level')
    console.log(current_level)

    if (current_level != null) {
      levelSelect.value = current_level
      if (current_level === 'easy') {
        change_level(facils)
      } else if (current_level === 'medium') {
        change_level(intermig)
      } else if (current_level === 'hard') {
        change_level(all_sounds)
      } else if (current_level == 'starter') {
        change_level(starter_sounds)
      }
    } else {
      current_level = 'easy'
      levelSelect.value = current_level
      sounds = facils

      let currentSoundIndex = Math.floor(Math.random() * sounds.length);
      currentSound = sounds[currentSoundIndex];
      audioPlayer.src = `sounds/${currentSound["file"]}`;
      birdNameDropdown.innerHTML = sounds.map(({ name }) => `<option value="${name}">${name}</option>`).join('');
    }
  })
  .catch(error => console.error(error));



submitButton.addEventListener('click', (event) => {
  console.log('submit button clicked');
  event.preventDefault(); // prevent the form from submitting and refreshing the page
  const selectedBirdName = birdNameDropdown.value;
  console.log(currentSound)
  console.log(`selected bird name: ${selectedBirdName}, currentSound.name: ${currentSound["name"].toLowerCase()}`);
  if (selectedBirdName === currentSound["name"]) {
    window.location.href = `correct.html?guessedBird=${selectedBirdName}&level=${current_level}`;
    //resultMessage.textContent = 'Correcte!';
  } else {
    resultMessage.textContent = 'Incorrecte, torna-ho a provar.';
  }
});

showResultButton.addEventListener('click', (event) => {
  resultMessage.textContent = 'La solució correcta és: ' + currentSound["name"]
})


nextButton.addEventListener('click', () => {
  resultMessage.textContent = '';
  currentSoundIndex = Math.floor(Math.random() * sounds.length);
  currentSound = sounds[currentSoundIndex];
  audioPlayer.src = `sounds/${currentSound["file"]}`;
  console.log(`currentSoundIndex: ${currentSoundIndex}, currentSound: ${JSON.stringify(currentSound)}`);
});

levelSelect.addEventListener('change', (event) => {
  const lvl = event.target.value;
  if (lvl === 'easy') {
    current_level = 'easy'
    change_level(facils)
  } else if (lvl === 'medium') {
    current_level = 'medium'
    change_level(intermig)
  } else if (lvl === 'hard') {
    current_level = 'hard'
    change_level(all_sounds)
  } else if (lvl == 'starter') {
    current_level = 'starter'
    change_level(starter_sounds)
  }
});

function change_level(sounds_array) {
  sounds = sounds_array
  birdNameDropdown.innerHTML = sounds.map(({ name }) => `<option value="${name}">${name}</option>`).join('');
  resultMessage.textContent = '';
  currentSoundIndex = Math.floor(Math.random() * sounds.length);
  currentSound = sounds[currentSoundIndex];
  audioPlayer.src = `sounds/${currentSound["file"]}`;
}
