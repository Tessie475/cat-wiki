'use strict'

const searchResult = document.querySelector('.search__result');

function describeCat (data) {
    const describe = `
    <div class="col-lg-4 mb-4 cat__img__div" id="cat">
                    <img class=" mb-3 img-fluid img " src="${data.image.url}">
                  </div>
                  <div class="col-lg-8 mb-4 ms-3">
                      <h3>${data.name}</h3>
                     <p class="about">${data.description}</p>
                  </div>
                  </div>
    `;
    searchResult.insertAdjacentHTML('beforeend', describe)
}

function getDescription () {
    fetch('https://api.thecatapi.com/v1/breeds', {
        method: 'GET',
        header: {
            'x-api-key': '8f7cf3d7-6501-4e6f-9c35-20f92afa8dad'
        }
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        for(let i =0; i<=10; i++){
            describeCat(data[i])
        }
    })
}

getDescription()
