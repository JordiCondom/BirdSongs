const image = document.getElementById('bird-image');
const submitButton = document.getElementById('submit-button');
const nextButton = document.getElementById('next-button');
const resultMessage = document.getElementById('result-message');
const birdNameDropdown = document.getElementById('bird-name');
const showResultButton = document.getElementById('show-solution-button');
const labelElement = document.getElementById("bird-name-label");


let currentImage = null;
let all_images = [];
let intermig = [];
let facils = [];
let current_level = null;

fetch('birds.json')
  .then(response => response.json())
  .then(data => {
    console.log("Json retrieved properly");
    all_images = data["all_sounds"];
    intermig = data["intermig"];
    facils = data["facils"];
    starter_images = data["starter"];
    nivell0_images = data["nivell0"];

    console.log(all_images.length)
    console.log(intermig.length)
    console.log(facils.length)
    console.log(starter_images.length)
    console.log(nivell0_images.length)

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    current_level = urlParams.get('level');
    console.log(current_level);

    if ((current_level === 'easy') || (current_level == null)) {
      change_level(facils);
    } else if (current_level === 'medium') {
      change_level(intermig);
    } else if (current_level === 'hard') {
      change_level(all_images);
    } else if (current_level == 'starter') {
      change_level(starter_images);
    } else if (current_level == 'nivell0') {
      change_level(nivell0_images);
    }

    let currentImageIndex = Math.floor(Math.random() * images.length);
    currentImage = images[currentImageIndex];
    image.src = `images/${currentImage["image"]}`;
    birdNameDropdown.innerHTML = images.map(({ name }) => `<option value="${name}">${name}</option>`).join('');
    
  })
  .catch(error => console.error(error));

submitButton.addEventListener('click', (event) => {
  console.log('submit button clicked');
  event.preventDefault(); // prevent the form from submitting and refreshing the page
  const selectedBirdName = birdNameDropdown.value;
  console.log(currentImage);
  console.log(`selected bird name: ${selectedBirdName}, currentImage.name: ${currentImage["name"].toLowerCase()}`);
  if (selectedBirdName === currentImage["name"]) {
    birdNameDropdown.style.display = 'none';
    submitButton.style.display = 'none';
    showResultButton.style.display = 'none';
    labelElement.style.display = 'none';
    resultMessage.textContent = 'Correcte! Has encertat ' +  selectedBirdName;
  } else {
    resultMessage.textContent = 'Incorrecte, torna-ho a provar.';
  }
});

showResultButton.addEventListener('click', () => {
  resultMessage.textContent = 'La solució correcta és: ' + currentImage["name"];
});

nextButton.addEventListener('click', () => {
  birdNameDropdown.style.display = 'block';
  submitButton.style.display = 'block';
  showResultButton.style.display = 'block';
  labelElement.style.display = 'block';
  resultMessage.textContent = '';
  currentImageIndex = Math.floor(Math.random() * images.length);
  currentImage = images[currentImageIndex];
  image.src = `images/${currentImage["image"]}`;
  console.log(`currentImageIndex: ${currentImageIndex}, currentImage: ${JSON.stringify(currentImage)}`);
});

  
  function change_level(images_array) {
    images = images_array
    birdNameDropdown.innerHTML = images.map(({ name }) => `<option value="${name}">${name}</option>`).join('');
    resultMessage.textContent = '';
    currentImageIndex = Math.floor(Math.random() * images.length);
    currentImage = images[currentImageIndex]; // create an image element
    image.src = `images/${currentImage["image"]}`; // set the image source to the current bird's image
  }
  