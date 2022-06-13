'use strict'

// document.getElementById('cat-img--div').addEventListener('onload', loadImages)
const catImg = document.getElementById('cat-img--div')
function renderImages(data) {
    const images = `
    <div>
     <img class="ms-5 mb-3 img-fluid img first__cat__img" src="${data.image.url}".jpg">
     <p>${data.name}</p>
     </div>
     
     `;
     catImg.insertAdjacentHTML('beforeend', images)
}
function loadImages(){
    fetch('https://api.thecatapi.com/v1/breeds', {
        method: 'GET',
        header: {
            'x-api-key': '8f7cf3d7-6501-4e6f-9c35-20f92afa8dad'
        }
    })
    .then((res) => res.json())
    .then((data) => {console.log(data)
        for(let i = 0; i<=3; i++){
            renderImages(data[i])
    // console.log(data[0].image.url)

        }
})

}
 loadImages()

const day = "monday"
console.log(day)
