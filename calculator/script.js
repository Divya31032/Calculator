let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    let value = e.target.innerHTML.trim(); // Trim to avoid extra spaces

    if (value === '=') {
      try {
        string = eval(string); // Ensure eval is safe with input validation
        document.querySelector('input').value = string;
      } catch (error) {
        document.querySelector('input').value = "Error"; // Handle invalid input
      }
    }
    else if (value === 'C') {
      string = "";
      document.querySelector('input').value = string;
    }
    else {
      string = string + value;
      document.querySelector('input').value = string;
    }
  });
});
