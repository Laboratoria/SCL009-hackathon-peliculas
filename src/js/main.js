const url = 'http://www.omdbapi.com/?apikey=4e29c677&s=dragon%20ball'

btn.addEventListener('click', () => {
    loadFilms()
})
const loadFilms = () => {
    fetch(url)
    .then(response => response.json())
    .then(response => {
        console.log(response);  
    })

}