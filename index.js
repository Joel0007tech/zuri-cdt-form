const form = document.querySelector("form");
const numberInput = document.getElementById("numberInput");
const errorMsg = document.getElementById("errorMsg");
const logo = document.getElementById("logo");
const inputBoxes = document.querySelectorAll("input");
const successMsg = document.getElementById("successMsg");
const monthDropdown = document.getElementById("monthDropdown");
const monthSelection = document.getElementById("monthSelection");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const inputValue = numberInput.value;
  
    if (!/^\d{16}$/.test(inputValue)) {
      errorMsg.textContent = "Card number must be 16 numbers";
    } else {
      errorMsg.textContent = "";
      form.submit();
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
 

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const inputValue = numberInput.value;

  if (!/^\d{16}$/.test(inputValue)) {
    errorMsg.textContent = "Card number must be 16 numbers";
    successMsg.textContent = "";
  } else {
    errorMsg.textContent = "";
    successMsg.textContent = "Payment successful!";
  }
});
 
numberInput.addEventListener("input", function(event) {
  const inputValue = event.target.value;
  const number = parseInt(inputValue, 10);
  
  if (number === 2) {
    logo.src = "mastercard-removebg-preview.png";
  } else if (number === 3) {
    logo.src = "American-Express-Color.png";
  } else if (number === 4) {
    logo.src = "visa-removebg-preview.png";
  } else if(number === 5) {
    logo.src = "mastercard-removebg-preview.png";
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

monthDropdown.addEventListener("change", function() {
  const selectedMonth = monthDropdown.value;
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
  function toggleDrop() {
    var displayContenttoggle = document.getElementById("months");
    displayContenttoggle.style.display = months.style.display === "block" ? "none" :"block";
  }