const progress = document.querySelector('#progress')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')
const message = document.querySelectorAll('.message');



let currentActive = 1

next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  console.log(currentActive)
  update();
})

prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
})

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active')
    }
    // console.log(circles)
  })
  const actives = document.querySelectorAll('.active')
  console.log(actives.length, circles.length)
  progress.style.width = (actives.length - 1) * (1 / (circles.length - 1)) * 100 + "%";
  message.forEach((mssg, indx) => {
    if (indx < currentActive) {
      mssg.classList.remove('not-active');
    } else {
      mssg.classList.add('not-active')
    }
  })
  

  if (currentActive == 1) {
    prev.disabled = true;
  }
  else if (currentActive == circles.length) {
    next.disabled = true;
  }
  else {
    prev.disabled = false;
    next.disabled = false;
  }
}