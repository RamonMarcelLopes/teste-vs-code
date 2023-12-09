///select elements///
let button = document.getElementById('button-action');
let select = document.getElementById('types');
let input = document.getElementById('input-age');
let img = document.getElementById('loading-img');
let textResult = document.getElementById('result');
let yourage = document.getElementById('your-age');
////////////////////

///variables////
let minAge = 18;
let age = 0;
let choice = 'current';
let results = Boolean;
let currentAgeForShow = 0;
////////////////

///functions////
let selectChange = () => {
  choice = select.value;
};
let inputChanged = () => {
  age = input.value;
};
let setResult = () => {
  setInterval(() => {
    img.classList.remove('loading-img-true');
    img.classList.add('loading-img-false');

    if (results == true) {
      textResult.innerHTML = ' ';
      textResult.innerHTML = 'The result is YES you can ';
      yourage.innerHTML = `you are ${currentAgeForShow} years old`;
    }
    if (results == false) {
      textResult.innerHTML = '';
      textResult.innerHTML = 'The result is No you can NOT ';
      yourage.innerHTML = `you are ${currentAgeForShow} years old`;
    }
  }, 2000);
};

let buttonPressed = () => {
  textResult.innerHTML = ' ';
  yourage.innerHTML = ``;
  img.classList.remove('loading-img-false');
  img.classList.add('loading-img-true');
  if (choice == 'current') {
    if (age >= minAge) {
      results = true;
      currentAgeForShow = age;
    } else {
      results = false;
      currentAgeForShow = age;
    }
  }
  if (choice == 'noCurrent') {
    let today = new Date();
    let year = today.getFullYear();
    let test = year - age;
    currentAgeForShow = test;
    if (test >= minAge) {
      results = true;
    } else {
      results = false;
    }
  }

  setResult();
};
/////////////

///events////
button.addEventListener('click', buttonPressed);
select.addEventListener('change', selectChange);
input.addEventListener('change', inputChanged);
////////////
