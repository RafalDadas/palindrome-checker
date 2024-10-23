const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const isInputEmpty = (input) => {
  return input === '';
};

const removeNonAlphanumericCharacters = (input) => {
  const regex = /[A-Z][a-z]\d/gi;
  console.log(input.replace(regex, ""));
  return input.replace(regex, "");
};

const isPalindrome = () => {
  const input = textInput.value;
  const filteredInput = removeNonAlphanumericCharacters(input);
  for (let i = 0; i < filteredInput.length; i++) {
    console.log(filteredInput[i]);
  }
};

const checkForPalindrome = () => {
  if (isInputEmpty(textInput.value)) {
    alert("Please input a value");
    return null;
  }
  isPalindrome();
  result.classList.remove("hide");
};

checkButton.addEventListener("click", checkForPalindrome);