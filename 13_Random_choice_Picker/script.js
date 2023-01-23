const tagsElem = document.querySelector('#tags')
const textarea = document.querySelector('#textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)

  if (e.key == 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    },10)
    randomSelect()
    // pickRandomTag()
    
  }
})



function createTags(input) {
  // console.log(input)
  const tags = input.split(',')
    .filter(tag => tag.trim() != '')
    .map(tag => tag.trim());
  // console.log(tags)

  // clear tags
  tagsElem.innerHTML = '';

  // add tags
  tags.forEach(tag => {
    const t = document.createElement('span')
    t.classList.add('tag')
    t.innerText = tag
    tagsElem.appendChild(t)
  }) 
}

pickRandomTag()


function randomSelect() {
  const times = 30

  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    setTimeout(() => {
      unhighlightTag(randomTag)
    })
    highlightTag(randomTag)
  }, 100)

// settimeout runs only once after assigned time in ms
  setTimeout(() => {
    // interval needs to be cleared becasue set interval runs forever    
    clearInterval(interval)
    setTimeout(() => {
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
      // console.log(randomTag)
    })
  }, times * 100)

}



function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')  
  // console.log(tags[Math.floor(Math.random() * tags.length)])
  return tags[Math.floor(Math.random() * tags.length)]

  
}


function highlightTag(tag) {
  tag.classList.add('highlight')
}
function unhighlightTag(tag) {
  tag.classList.remove('highlight')
}