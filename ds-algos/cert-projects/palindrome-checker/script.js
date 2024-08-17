

const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const validateInput = () => {
  const str = textInput.value;

  if (str.length === 0) {
    alert("Please input a value");
  } else {
    let filteredStr = str
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`()\s]/g, "")
      .toLowerCase();
    let reverseStr = filteredStr.split("").reverse().join("");

    if (filteredStr.toLowerCase() === reverseStr) {
      result.innerText = `${str} is a palindrome`;
    } else {
      result.innerText =  `${str} is not a palindrome`;
    }
  }
};
