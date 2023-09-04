const form = document.querySelector("form");
const numberInput = document.getElementById("numberInput");
const errorMsg = document.getElementById("errorMsg");
const logo = document.getElementById("logo");
const inputBoxes = document.querySelectorAll("input");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const inputValue = numberInput.value;
  
    if (!/^\d{16}$/.test(inputValue)) {
      errorMsg.textContent = "Card number must be 16 numbers";
    } else {
      // Perform further actions if the input is valid
      // For example, submit the form or execute other logic
      errorMsg.textContent = "";
      form.submit(); // Uncomment if you want to submit the form
    }
  });
  
  numberInput.addEventListener("blur", function() {
    const inputValue = numberInput.value;
  
    if (!/^\d{16}$/.test(inputValue)) {
      errorMsg.textContent = "Card number must be 16 numbers";
    } else {
      errorMsg.textContent = "";
    }
  });
  
numberInput.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  
  if (/^\d+$/.test(inputValue)) {
    const number = Number(inputValue);
    
    if (number % 2 === 0) {
      logo.src = "American-Express-Color.png";
    } else {
      logo.src = "mastercard-removebg-preview.png";
    }
  } else {
    logo.src = "visa-removebg-preview.png";
  }
});

inputBoxes.forEach((input, index) => {
  input.addEventListener("input", (event) => {
    const currentInput = event.target;
    const nextInput = inputBoxes[index + 1];

    if (currentInput.value.length === 4 && nextInput) {
      nextInput.focus();
    }
  });
});

  function cardValue() {
    var displayContent = document.getElementById("displayContent");
    displayContent.style.display = displayContent.style.display === "block" ? "none" :"block";
  }
  function cardHolder() {
    var displayHolder = document.getElementById("displayHolder");
    displayHolder.style.display = displayHolder.style.display === "block" ? "none" :"block";
  }
  function cardValuemobile() {
    var displayContentmobile = document.getElementById("displayContentmobile");
    displayContentmobile.style.display = displayContentmobile.style.display === "block" ? "none" :"block";
  }
  function cardHoldermobile() {
    var displayHoldermobile = document.getElementById("displayHoldermobile");
    displayHoldermobile.style.display = displayHoldermobile.style.display === "block" ? "none" :"block";
  }