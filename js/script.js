'use strict';
var ESCAPE_KEY = 27;
var adButton = document.querySelector('.add');
var clearButton = document.querySelector('.clear');
var list = document.querySelector('.list');
var input = document.querySelector('.form__input');
var finishButton = document.querySelector('.finish');
var closePopupBtn = document.querySelector('.box__close');
var popUp = document.querySelector('.popup');
var listElement = document.getElementsByTagName('li');

var setFocus = function() {
  input.focus();
}

var createNewList = function() {
  input.classList.remove('remind');
  var li = document.createElement('li');
  var text = document.createTextNode(input.value);
  li.appendChild(text);
  li.setAttribute('tabindex', '3');
  list.appendChild(li);
  input.value = '';
  finishButton.classList.remove('opacity');
  setFocus();
};

adButton.addEventListener('click', function(){
  if (input.value == '') {
    input.classList.add('remind');
    return false
  }  else {
  createNewList();
  return true;
}  
})

input.addEventListener('click', function(){
  if (input.classList.contains('remind')) {
    input.classList.remove('remind');
 }
})

input.addEventListener('keydown', function(evt){
  if (evt.key === 'Enter' && !input.value == '') {
    createNewList(); 
  }
})

clearButton.addEventListener('click', function(){
  input.value = '';
  setFocus();
});

clearButton.addEventListener('keydown', function(){
  if (evt.key === 'Enter') {
    evt.preventDefault();
    input.value = '';
    setFocus();
  }
});

finishButton.addEventListener('click', function(){
  input.value = '';
  var list = document.querySelector ('.list');
  while (list.firstChild) {
  list.removeChild(list.firstChild);
  }
  finishButton.classList.add('opacity');
  popUp.classList.remove('visually-hidden');
  setFocus();
});


list.addEventListener('click', function(evt) {
  if (evt.target.tagName === 'LI') {
      evt.target.classList.add('checked');
  }
})

list.addEventListener('keydown', function(evt) {
  if (evt.key === 'Enter') {
    evt.target.classList.add('checked');
  }
})

closePopupBtn.addEventListener('click', function(){
  popUp.classList.add("visually-hidden");
})

closePopupBtn.addEventListener('keydown', function(){
  if (evt.key === 'Enter') {
    popUp.classList.add("visually-hidden");
  }
})

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESCAPE_KEY) {
    popUp.classList.add("visually-hidden");
  }
});

popUp.addEventListener('click', function (evt) {
    popUp.classList.add("visually-hidden");
});
