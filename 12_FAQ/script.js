const buttons = document.querySelectorAll('button')
console.log(buttons)

buttons.forEach((b) => {  
  b.addEventListener('click', () => {
    b.parentElement.classList.toggle('active')
  })
})