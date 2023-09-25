const inputField = document.getElementById("inputbtn");
const buttons = document.querySelectorAll("button");
let inputString = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    if (buttonText === "AC") {
      inputString = "";
    } 
    else if (buttonText === "=") {
      try {
        inputString = eval(inputString).toString();
      } catch (error) {
        inputString = "Error";
      }
    }
    else if(buttonText === 'DEL'){
        inputString = inputString.substring(0,inputString.length-1);
        inputField.vlaue = inputString;
    } 
    else {
      inputString += buttonText;
    }

    inputField.value = inputString;
  });
});