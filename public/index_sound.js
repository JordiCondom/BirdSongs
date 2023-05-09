// index.js
const audioPlayer = document.getElementById('audio-player');
const submitButton = document.getElementById('submit-button');
const nextButton = document.getElementById('next-button');
const resultMessage = document.getElementById('result-message');
const birdNameDropdown = document.getElementById('bird-name');
const showResultButton = document.getElementById('show-solution-button');
const labelElement = document.getElementById("bird-name-label");
const image = document.getElementById('bird-image');


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
    nivell0_sounds = data["nivell0"]

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    current_level = urlParams.get('level')
    console.log(current_level)

    
    if ((current_level === 'easy') || (current_level == null)) {
      change_level(facils)
    } else if (current_level === 'medium') {
      change_level(intermig)
    } else if (current_laaaevel === 'hard') {
      change_level(all_sounds)
    } else if (current_level == 'starter') {
      change_level(starter_sounds)
    } else if (current_level == 'nivell0') {
      change_level(nivell0_sounds)
    }

    let currentSoundIndex = Math.floor(Math.random() * sounds.length);
    currentSound = sounds[currentSoundIndex];
    audioPlayer.src = `sounds/${currentSound["file"]}`;
    birdNameDropdown.innerHTML = sounds.map(({ name }) => `<option value="${name}">${name}</option>`).join('');
    image.src = `images/${currentSound["image"]}`;
    image.style.display = 'none';
    
  })
  .catch(error => console.error(error));



submitButton.addEventListener('click', (event) => {
  console.log('submit button clicked');
  event.preventDefault(); // prevent the form from submitting and refreshing the page
  const selectedBirdName = birdNameDropdown.value;
  console.log(currentSound)
  console.log(`selected bird name: ${selectedBirdName}, currentSound.name: ${currentSound["name"].toLowerCase()}`);
  if (selectedBirdName === currentSound["name"]) {
    birdNameDropdown.style.display = 'none';
    submitButton.style.display = 'none';
    showResultButton.style.display = 'none';
    labelElement.style.display = 'none';
    image.style.display = 'block';
    image.src = `images/${currentSound["image"]}`;
    resultMessage.textContent = 'Correcte! Has escoltat ' +  selectedBirdName;
  } else {
    resultMessage.textContent = 'Incorrecte, torna-ho a provar.';
  }
});

showResultButton.addEventListener('click', (event) => {
  resultMessage.textContent = 'La solució correcta és: ' + currentSound["name"]
})


nextButton.addEventListener('click', () => {
  birdNameDropdown.style.display = 'block';
  submitButton.style.display = 'block';
  showResultButton.style.display = 'block';
  labelElement.style.display = 'block';
  image.style.display = 'none';
  resultMessage.textContent = '';
  currentSoundIndex = Math.floor(Math.random() * sounds.length);
  currentSound = sounds[currentSoundIndex];
  audioPlayer.src = `sounds/${currentSound["file"]}`;
  console.log(`currentSoundIndex: ${currentSoundIndex}, currentSound: ${JSON.stringify(currentSound)}`);
});

function change_level(sounds_array) {
  sounds = sounds_array
  birdNameDropdown.innerHTML = sounds.map(({ name }) => `<option value="${name}">${name}</option>`).join('');
  resultMessage.textContent = '';
  currentSoundIndex = Math.floor(Math.random() * sounds.length);
  currentSound = sounds[currentSoundIndex];
  audioPlayer.src = `sounds/${currentSound["file"]}`;
}
