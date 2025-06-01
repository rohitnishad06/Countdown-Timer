let interval;

function startCountdown() {
  const dateInput = document.getElementById("datetime").value;
  const errorDiv = document.getElementById("error");
  const timerDiv = document.getElementById("timer");

  if (!dateInput) {
    errorDiv.textContent = "Please select a valid date and time.";
    return;
  }

  const targetDate = new Date(dateInput);
  const now = new Date();

  if (targetDate <= now) {
    errorDiv.textContent = "Selected time must be in the future.";
    return;
  }

  errorDiv.textContent = "";
  clearInterval(interval);

  interval = setInterval(() => {
    const currentTime = new Date().getTime();
    const distance = targetDate.getTime() - currentTime;

    if (distance < 0) {
      clearInterval(interval);
      timerDiv.textContent = "⏰ Time's up!";
      alert("Countdown finished!");
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerDiv.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}

function toggleTheme() {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");
}
