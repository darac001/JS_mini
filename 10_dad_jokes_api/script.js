const jokeEl = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn')
const picture = document.querySelector('.picc')

// generateJoke()

// jokeBtn.addEventListener('click',generateJoke)


// fetch .then method

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json'
//     }
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((response) => response.json())
//   // .then((data)=>console.log(data))
//     .then((data) => {
//       // .joke key is part of the json object
//     jokeEl.innerHTML = data.joke
//   })
// }




// async await fetch

// async function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json'
//     }
//   }
//   const response = await fetch('https://icanhazdadjoke.com', config)  
//   const data = await response.json()
//       // .joke key is part of the json object
//     jokeEl.innerHTML = data.joke
// }


// nasa api key
const key = 'EMGctXR2G9JSRbQ6Md4tSGIv3yG30H1vcLmLKAUm';

async function nasa() {

  const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=EMGctXR2G9JSRbQ6Md4tSGIv3yG30H1vcLmLKAUm')  
  const data = await response.json()
  console.log(response)
  console.log(data.url)
      // .joke key is part of the json object
    picture.src = data.url
}

nasa()

