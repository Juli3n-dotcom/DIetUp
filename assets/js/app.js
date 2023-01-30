const progressBarContainer = document.querySelector("#progressBarContainer");
const progressBar = document.querySelector("#progressBar");
const container = document.querySelector('.recettes__container');
let totalElementHeight = container.scrollHeight - window.innerHeight;
let debounceResize;

console.log(totalElementHeight)

window.addEventListener("scroll", () => {
  let newProgressHeight = window.pageYOffset / totalElementHeight;
  progressBar.style.transform = `scale(1,${newProgressHeight})`;
  progressBar.style.opacity = `${newProgressHeight}`;
}, {
  capture: true,
  passive: true
});

progressBarContainer.addEventListener("click", (e) => {
  let newPageScroll = e.clientY / progressBarContainer.offsetHeight * totalElementHeight;
  window.scrollTo({
    top: newPageScroll,
    behavior: 'smooth'
  });
});

window.addEventListener("resize", () => {
  clearTimeout(debounceResize);
  debounceResize = setTimeout(() => {
    totalElementHeight = container.scrollHeight - window.innerHeight;
  }, 250);
});