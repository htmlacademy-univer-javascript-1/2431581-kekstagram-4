function checkLenght (string, lenght) {
  if (string.lenght <= lenght) {
    console.log(true);
  }
  console.log(false);
}

checkLenght('проверяемая строка', 20);
checkLenght('проверяемая строка', 18);
checkLenght('проверяемая строка', 10);
