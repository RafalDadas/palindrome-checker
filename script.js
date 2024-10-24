const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

const isInputEmpty = (input) => {
  return input === '';
};

const removeNonAlphanumericCharacters = (input) => {
  const regex = /[\s,.\-_+=*/\\?';:\]\[{}!@#$%^&()`"<>]+/gi;
  return input.replace(regex, '');
};

const isPalindrome = () => {
  const input = textInput.value;
  const filteredInput = removeNonAlphanumericCharacters(input).toLowerCase();
  let reversedInput = '';
  for (let i = filteredInput.length; i > 0; i--) {
    reversedInput += filteredInput[i - 1];
  }
  return filteredInput === reversedInput;
};

const checkForPalindrome = () => {
  if (isInputEmpty(textInput.value)) {
    alert('Please input a value');
    return null;
  }
  result.innerText = isPalindrome()
      ? `${textInput.value} is a palindrome`
      : `${textInput.value} is not a palindrome`;
  result.classList.remove('hide');
};

checkButton.addEventListener('click', checkForPalindrome);