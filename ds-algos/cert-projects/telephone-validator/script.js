const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");


const checkInput = () => {

    if (userInput.value === "") {
        alert("Please provide a phone number")
    } else {
        const regex = /^[1]?[-\s]?(\d{3}|\(\d{3}\))[-\s]?(\d{3})[-\s]?(\d{4})$/g
        regex.test(userInput.value)
            ? results.innerText = `Valid US number: ${userInput.value}`
            : results.innerText = `Invalid US number: ${userInput.value}`
    }
}


const clearInput = () => {
  results.innerText = ""
}
