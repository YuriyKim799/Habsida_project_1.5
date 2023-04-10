const slideEls = document.querySelectorAll('.slider-main__list--item');
const slideDotsEls = document.querySelectorAll('.slider-main__dots--item');
const dots = document.querySelectorAll('.slider-main__dots--item');
const sliderLine = document.querySelector('.slider-main__list');
let dotIndex = 0;
let position = 0;


console.log(dots);

dots.forEach((dot, index) => {
  dot.addEventListener('click', event => {
    position = 256 * index;
    sliderLine.style.left = -position + 'px';
    syncDots(index)
  })
})

const syncDots = (index) => {
  for (let dot of dots) {
    dot.classList.remove('active-dot');
  }
  dots[index].classList.add('active-dot');
}