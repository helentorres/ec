document.addEventListener('DOMContentLoaded', () => {
  const welcomeMessage = document.getElementById('welcomeMessage');

  setTimeout(() => {
    welcomeMessage.style.opacity = 1;
  }, 500);

  
  setTimeout(() => {
    welcomeMessage.style.opacity = 0;
  }, 5000);
});