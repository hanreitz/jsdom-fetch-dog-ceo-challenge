console.log('%c HI', 'color: firebrick')

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const dogImageContainer = document.getElementById('dog-image-container');

const breedURL = 'https://dog.ceo/api/breeds/list/all';
const breedSelection = document.getElementById('breed-dropdown');
const breedList = document.getElementById('dog-breeds');

document.addEventListener("DOMContentLoaded", () => {
  fetchImages();
  fetchBreeds();

  breedSelection.addEventListener('change', () => {
    while(breedList.firstChild) {
      breedList.removeChild(breedList.firstChild);
    }
    fetchBreeds();
  });
 
});

function fetchImages() {
  fetch(imgUrl).then(response => response.json()).then(json => {
    json.message.forEach(element => addImage(element));
  })
}

function fetchBreeds() {
  fetch(breedURL).then(response => response.json()).then(json => {
    Object.keys(json.message).forEach(element => addBreed(element));
  })
}

function addImage(element) {
  const dogImage = document.createElement('img');
  dogImage.src = element;
  dogImageContainer.append(dogImage);
}

function addBreed(element) {
  if(breedSelection.value) {
    if(element.charAt(0)===breedSelection.value) {
      makeBreedBullet(element);
    };
  } else {
    makeBreedBullet(element);
  };
};

function makeBreedBullet(element) {
  const li = document.createElement('li');
  li.innerText = element;
  li.id = element;
  breedList.append(li);
  li.addEventListener('click', () => {
    li.style.color = 'red';
  })
};

function listenForBreedChange() {
  breedSelection.addEventListener('change', () => {
    addBreed()
  })
}

// challenge 1 done [X]
// challenge 2 done [X]
// challenge 3 done [X]
/* challenge 4 done [X] - EXCEPT I'd have to refactor to make 
   a filter function on the dropdown change listener, because right now,
   I don't load the whole breed list at the first page load; just the 
   filtered one. It might also be a good option to just add an 'all' option 
   to the dropdown that would show all breeds, so that the list can be 
   returned to dynamically */ 