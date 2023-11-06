export default function validation(
  lengthInput,
  errorMessage,
  buttonFormNext,
  formTitleLesson,
  formCounterCount,
  inputFormPurpose
) {
  lengthInput > 200
    ? (errorMessage.style.opacity = 1)
    : (errorMessage.style.opacity = 0);
  if (lengthInput !== 0 && lengthInput <= 200) {
    buttonFormNext.classList.add('form__button_active');
    buttonFormNext.classList.remove('form__button_no-active');
  } else {
    buttonFormNext.classList.add('form__button_no-active');
    buttonFormNext.classList.remove('form__button_active');
  }
  if (lengthInput >= 0 && lengthInput <= 200) {
    formTitleLesson.classList.remove('error-text');
    formCounterCount.classList.remove('error-text');
    errorMessage.classList.remove('error-text');
    inputFormPurpose.classList.remove('error-border');
  } else {
    formTitleLesson.classList.add('error-text');
    formCounterCount.classList.add('error-text');
    errorMessage.classList.add('error-text');
    inputFormPurpose.classList.add('error-border');
  }
}
