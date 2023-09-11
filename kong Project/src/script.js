let root = document.documentElement;

root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', (e.clientX / 5) + "deg");
  root.style.setProperty('--mouse-y', ((e.clientY / -50) - 10) + "deg");
});