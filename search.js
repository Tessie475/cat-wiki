fetch(' https://api.thecatapi.com/v1/breeds/search?q=sib')
.then((res) => res.json())
.then((data) => {
    console.log(data)
})