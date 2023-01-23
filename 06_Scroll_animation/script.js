const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight - 150
  boxes.forEach(element => {
    const boxTop = element.getBoundingClientRect().top
    console.log('top:', boxTop)
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

    if (boxTop < triggerBottom) {
      element.classList.add('show');
    }
    else {
      element.classList.remove('show');
    }
  });
});