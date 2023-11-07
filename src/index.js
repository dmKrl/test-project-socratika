import counter from './modules/counter.js';
import validation from './modules/validation.js';
import changeActiveInput from './modules/changeActiveInput.js';

const moreVariableChips = document.querySelector('.form__chips_more');
const buttonShowMoreChips = document.querySelector('.form__show_more');
const buttonFormNext = document.querySelector('.form__button_next');
const inputFormPurpose = document.querySelector('.form__purpose_input');
const formTitleLesson = document.querySelector('.form__title_lesson');
const formFirstSelect = document.querySelector('.form__first_select');
const formTitleClassNumber = document.querySelector(
  '.form__title_class-number'
);
const formCounterCount = document.querySelector('.form__counter_count');
const formHeadAfter = document.querySelector('.form__head');
const errorMessage = document.querySelector('.form__counter_message');
const selectListElement = document.querySelector('.form__head');
const listElement = document.querySelector('.form__list');
const listItemElement = document.querySelectorAll('.form__item');
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
  const arrayListItemElements = Array.from(listItemElement);
  console.log(arrayListItemElements);
  const target = event.target;

  // Смена цвета рамки и текста у селектора выбора класса и отображение самой рамки
  if (target.closest('.form__first_select')) {
    if (listElement.classList.contains('hidden')) {
      changeActiveInput(formTitleClassNumber, formFirstSelect, formHeadAfter);
    } else {
      changeActiveInput(formTitleClassNumber, formFirstSelect, formHeadAfter);
    }
    listElement.classList.toggle('hidden');
  }

  if (target.closest('.form__item')) {
    selectListElement.textContent = target.closest('.form__item').textContent;
    arrayListItemElements.map((listItem) => listItem.classList.remove('checked'));
    target.classList.toggle('checked');
  }
});
