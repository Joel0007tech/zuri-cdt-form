const form = document.querySelector("form");
const numberInput = document.getElementById("numberInput");
const errorMsg = document.getElementById("errorMsg");

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

  function cardValue() {
    var displayContent = document.getElementById("displayContent");
    displayContent.style.display = displayContent.style.display === "block" ? "none" :"block";
  }
  function cardHolder() {
    var displayHolder = document.getElementById("displayHolder");
    displayHolder.style.display = displayHolder.style.display === "block" ? "none" :"block";
  }