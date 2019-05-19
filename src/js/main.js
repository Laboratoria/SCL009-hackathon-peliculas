// DECLARACIÓN DE VARIABLES GLOBALES

// URL + APIKEY 
const url = 'http://www.omdbapi.com/?apikey=857ae5f9&page=2'
// URL DE IMG DE POSTER + APIKEY
const urlPoster = 'http://img.omdbapi.com/?apikey=857ae5f9'

// BUSCAR PELICULA POR NOMBRE
btn.addEventListener('click', () => {
    searchFilms()
})
const searchFilms = () => {
    // GUARDA EL NOMBRE DE LA PELICULA PARA CONCATENARLO CON LA URL
    const nameMovie = '&s='+ document.getElementById('nameMovie').value
    fetch(url + nameMovie)
    .then(response => response.json())
    .then(response => {
        console.log(url + nameMovie);
        console.log(response); 
        //loadFilms(data) 
    })
    .then(function(data) {
       // drawFilms(data)
       // console.log(data.Title);
    })

// const loadFilms = (data) => {
//     const idFilms = '&i=tt0382268' //debe ser un array con los id de las peliculas a mostrar
//     let dataMovie = data.results;
//     document.getElementById('myContent').innerHTML = '';
// AQUI SE DEBERIA VOLVER A RECORRER LA DATA
// }
//
// const drawFilms = data => {
//     document.getElementById('myContent').innerHTML +=  
//     `
//     <div id="${data.imdbID}" data-target="modal${data.imdbID}" class="modal-trigger "> //PARA LLAMAR E IMPRIMIR EL MODAL        
//         <img src="${data.Poster}" alt="${data.Title}" />
//         <p>${data.Title}</p>   
//     </div>`
// }
}