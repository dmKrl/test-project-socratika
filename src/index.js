import counter from './modules/counter.js';
import validation from './modules/validation.js';

const moreVariableChips = document.querySelector('.form__chips_more');
const buttonShowMoreChips = document.querySelector('.form__show_more');
const buttonFormNext = document.querySelector('.form__button_next');
const inputFormPurpose = document.querySelector('.form__purpose_input');
const formTitleLesson = document.querySelector('.form__title_lesson');
const formCounterCount = document.querySelector('.form__counter_count');
const errorMessage = document.querySelector('.form__counter_message');
const selectListElement = document.querySelector('.form__head');
const listElement = document.querySelector('.form__list');
const formElement = document.querySelector('.form');
const counterInput = document.getElementById('counter');

buttonShowMoreChips.addEventListener('click', (event) => {
  event.preventDefault();
  moreVariableChips.classList.toggle('hidden');
});

inputFormPurpose.addEventListener('input', () => {
  let lengthInput = inputFormPurpose.value.split('').length;
  counter(lengthInput, counterInput);
  validation(
    lengthInput,
    errorMessage,
    buttonFormNext,
    formTitleLesson,
    formCounterCount,
    inputFormPurpose
  );
});

formElement.addEventListener('click', (event) => {
  const target = event.target;
  if (target.closest('.form__first_select')) {
    listElement.classList.toggle('hidden');
  }
  if (target.closest('.form__item')) {
    selectListElement.textContent = target.closest('.form__item').textContent;
  }
});
