function checkLenght (inputString, maxLenght) {
  if (inputString.length <= maxLenght) {
    return true;
  }
  else {
    return false;
  }
}

checkLenght('проверяемая строка', 20);
checkLenght('проверяемая строка', 18);
checkLenght('проверяемая строка', 10);

function isPalindrom (inputString) {
  let reverseString = '';
  const newString = inputString.replaceAll(' ', '');
  for (let i = newString.length - 1; i >= 0; i--) {
    reverseString += newString[i];
  }
  if (newString.toLowerCase() === reverseString.toLowerCase()) {
    return true;
  }
  else {
    return false;
  }
}
isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');
isPalindrom('Лёша на полке клопа нашёл ');

function getCount (inputParam) {
  const newString = inputParam.toString();
  let number = '';
  for (let i = 0; i < newString.length; i++){
    if (!Number.isNaN(parseInt(newString[i], 10))) {
      number += newString[i];
    }
  }
  return parseInt(number, 10);
}
getCount('2023 год');
getCount('ECMAScript 2022');
getCount('1 кефир, 0.5 батона');
getCount('агент 007');
getCount('а я томат');
getCount(2023);
getCount(-1);
getCount(1.5);
