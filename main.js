const slideEls = document.querySelectorAll('.slider-main__list--item');
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

const sliderEl = document.querySelector('.slider-main');
const buttonElShow = document.querySelector('.slider-main__button');
const buttonVectorEl = document.querySelector('.slider-main__button--vector');
const spanEl = document.querySelector('.slider-main__button--text')


console.log(buttonElShow);

buttonElShow.addEventListener('click', event => {
  buttonVectorEl.classList.toggle('rotate-vector');
  if (spanEl.innerText == "Показать все") {
    sliderEl.style.maxHeight = 312 + 'px';
    spanEl.innerText = "Скрыть"
  } else {
    spanEl.innerText = "Показать все";
    sliderEl.style.maxHeight = 212 + 'px';
  }
})