import { onFilterButtonChange, effectList, sliderWrapper } from './effects.js';
import { isEscapeKey } from './util.js';

const Zoom = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

const body = document.querySelector('body');
const formUpload = body.querySelector('.img-upload__form');
const overlay = body.querySelector('.img-upload__overlay');
const fileUpload = body.querySelector('#upload-file');
const formUploadClose = body.querySelector('#upload-cancel');
const minusButton = body.querySelector('.scale__control--smaller');
const plusButton = body.querySelector('.scale__control--bigger');
const scaleControlValue = body.querySelector('.scale__control--value');
const imagePreview = body.querySelector('.img-upload__preview img');

const closeForm = () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  effectList.removeEventListener('change', onFilterButtonChange);

  imagePreview.style.transform = '';
  imagePreview.className = 'img-upload__preview';
  imagePreview.style.filter = '';

  formUpload.reset();
};

const onCloseFormEscKeyDown = (evt) => {
  if (isEscapeKey(evt) &&
      !evt.target.classList.contains('text__hashtags') &&
      !evt.target.classList.contains('text__description')
  ) {
    evt.preventDefault();
    closeForm();

    document.removeEventListener('keydown', onCloseFormEscKeyDown);
  }
};

const changeImages = () => {
  const file = fileUpload.files[0];
  const fileUrl = URL.createObjectURL(file);

  imagePreview.src = fileUrl;

  /*effects.forEach((effect) => {
    effect.style.backgroundImage = `url('${fileUrl}')`;*/
};

const onFileUploadChange = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');

  changeImages();

  document.addEventListener('keydown', onCloseFormEscKeyDown);
  sliderWrapper.classList.add('hidden');
  effectList.addEventListener('change', onFilterButtonChange);
};

fileUpload.addEventListener('change', onFileUploadChange);

formUploadClose.addEventListener('click', () => {
  closeForm();
});

const changeZoom = (factor = 1) => {
  let size = parseInt(scaleControlValue.value, 10) + (Zoom.STEP * factor);

  if (size < Zoom.MIN) {
    size = Zoom.MIN;
  }

  if (size > Zoom.MAX) {
    size = Zoom.MAX;
  }

  scaleControlValue.value = `${size}%`;
  imagePreview.style.transform = `scale(${size / 100})`;
};

const onMinusButtonClick = () => {
  changeZoom(-1);
};

const onPlusButtonClick = () => {
  changeZoom();
};

minusButton.addEventListener('click', onMinusButtonClick);
plusButton.addEventListener('click', onPlusButtonClick);

export {closeForm, formUpload, imagePreview};
