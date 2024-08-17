const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const checkUserInput = () => {
  numInput = parseInt(numberInput.value);
  if (!numInput || isNaN(numInput)) {
    output.innerText = "Please enter a valid number";
    return;
  } else if (numInput === -1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (numInput >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  } else {

    const numerals = {
      1000: "M",
      900: "CM",
      500: "D",
      400: "CD",
      100: "C",
      90: "XC",
      50: "L",
      40: "XL",
      10: "X",
      9: "IX",
      5: "V",
      4: "IV",
      1: "I",
    };

    const convertNums = (num, letters) => {
      const numObj = {};
      for (let i = 0; i < letters.length; i++) {
        const value = letters[i];

        if (value <= num) {
          numObj[value] = Math.floor(num / value);
          num -= value * numObj[value];
        }
      }
      return numObj;
    };

    let convertNumObj = convertNums(numInput,[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]);

    let resultArr = [];

    for (let x in convertNumObj) {
      for (let y in numerals) {
        if (x == y) {
          if (convertNumObj[x] > 1) {
            resultArr.push([convertNumObj[x], numerals[y].repeat(convertNumObj[x])]);
          } else {
            resultArr.push([convertNumObj[x], numerals[y]]);
          }
        }
      }
    }

    let reverseArr = resultArr.flat().reverse();
    let filteredStr = reverseArr.filter((i) => !Number(i));
    result = filteredStr.join("");
    output.innerText = result
  }
};

/******************************* */

// const decimalToBinary = (input) => {
//   let binary = "";

//   if (input === 0) {
//     binary = "0";
//   }

//   while (input > 0) {
//     binary = (input % 2) + binary;
//     input = Math.floor(input / 2);
//   }

//   result.innerText = binary;
// };

// const checkUserInput = () => {
//   if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
//     alert("Please provide a decimal number");
//     return;
//   }

//   decimalToBinary(parseInt(numberInput.value));
//   numberInput.value = "";
// };

// convertBtn.addEventListener("click", checkUserInput);

// numberInput.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     checkUserInput();
//   }
// })
