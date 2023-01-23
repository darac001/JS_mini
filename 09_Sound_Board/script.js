const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(s => {
  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.innerText = s
  btn.addEventListener('click', () => {
    stopSongs()
    document.getElementById(s).play() 
  })
  
  const b = document.querySelector('#buttons')
  b.appendChild(btn)
  
})

function stopSongs() {
  sounds.forEach(sound=> {
    const song = document.getElementById(sound)
    song.pause()
  })
}