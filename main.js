window.addEventListener('load', () => {
  const dots = document.querySelectorAll('.slider-main__dots--item');
  const sliderLine = document.querySelector('.slider-main__list');
  let position = 0;

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
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

  window.addEventListener('resize', () => {
    if (document.body.clientWidth >= 668) {
      sliderLine.style.left = 0 + 'px';
    }
  })

  const sliderEl = document.querySelector('.slider-main');
  const buttonElShow = document.querySelector('.slider-main__button');
  const buttonVectorEl = document.querySelector('.slider-main__button--vector');
  const spanEl = document.querySelector('.slider-main__button--text')


  console.log(buttonElShow);

  buttonElShow.addEventListener('click', () => {
    buttonVectorEl.classList.toggle('rotate-vector');
    if (spanEl.innerText == "Показать все") {
      sliderEl.style.maxHeight = 312 + 'px';
      spanEl.innerText = "Скрыть"
    } else {
      spanEl.innerText = "Показать все";
      sliderEl.style.maxHeight = 212 + 'px';
    }
  })
})