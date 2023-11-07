export default function changeActiveInput(
  formTitleClassNumber,
  formFirstSelect,
  formHeadAfter
) {
  formTitleClassNumber.classList.toggle('focus-text');
  formFirstSelect.classList.toggle('focus-border');
  formHeadAfter.classList.toggle('open');
}
