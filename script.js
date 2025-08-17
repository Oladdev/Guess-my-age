const myAge = 100;
let attempts = 0;

function checkGuess() {
  let guess = parseInt(document.getElementById("guessInput").value);
  let message = document.getElementById("message");
  let button = document.getElementById("guessBtn");
  attempts++;
  message.innerHTML = `<span class="loader">...</span> Thinking...`;
  button.disabled = true;
  button.innerHTML = `<span class="spinner"></span> Loading...`;
  setTimeout(() => {
    if (isNaN(guess)) {
      message.textContent = "❌ Please enter a valid number!";
    } else if (guess < myAge) {
      message.textContent = "😂😂Lol! Try again.";
    } else if (guess > myAge) {
      message.textContent = "How old do you think i am 😭 Try again.";
    } else if (attempts === 1) {
      message.innerHTML =
        "Lol <span class='special'>Nice try!</span> </br>You're right🥱";
    } else {
      message.innerHTML = `Finally you got it right after like ${attempts} trials 😭😭</br> and yes I'm ${myAge} years old 😅`;
    }
  button.disabled = false;
    button.textContent = "Submit Guess";
  }, 1200);

}
