const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
  // get the array of letters
  label.innerHTML = label.innerText
    .split('')
    .map((letter, index) => `<span style="transition-delay:${index*50}ms">${letter}</span>`)
    .join(''); 
  
})