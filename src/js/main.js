// DECLARACIÓN DE VARIABLES GLOBALES

// URL OMDB
const url= 'https://www.omdbapi.com/?'
// URL OMDB API + APIKEY 
const urlOMdb = 'http://www.omdbapi.com/?apikey=857ae5f9&page=1&plot=full&type=movie';
// URL TMDB API + APIKEY
const urlTMdb ="https://api.themoviedb.org/3/discover/movie?api_key=665c6e4dc27510e065d9033504dfed36";
// URL DE IMG DE POSTER OMDB API + APIKEY
const urlPoster = 'http://img.omdbapi.com/?apikey=857ae5f9';

const myContent = document.getElementById('myContent');
let films = '';
let dataFilms = '';

// BUSCAR PELICULA POR NOMBRE O PALABRA CLAVE
//GUARDA EL NOMBRE DE LA PELICULA PARA CONCATENARLO CON LA URL
btn.addEventListener('click', () => {
    searchFilms()
})
const searchFilms = () => {

    // GUARDA EL NOMBRE DE LA PELICULA PARA CONCATENARLO CON LA URL
    let nameSearchMovie = '&s='+ document.getElementById('nameMovie').value
    fetch(urlOMdb + nameSearchMovie)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        console.log(urlOMdb + nameSearchMovie);
        console.log(data.Search.length);
        console.log(data.Search[0].Poster); 
        drawOMdbFilms(data);
    });
}

// const nameTitleMovie = 't='+document.getElementById('nameMovie').value+'&apikey=857ae5f9'
       /* var title = response.Title;
        var image = response.Poster;
        genre = response.Genre;
        plot = response.Plot;*/

    //por titulo
       /* element.innerHTML = 
        `  
        <p>${response.Title}</p>
        <img src= "${response.Poster}" alt="image" >
        <p>${response.Year}</p>
        <p>${response.Genre}</p>
        <p>${response.Plot}</p>
        <p>${response.Rated}</p>
        `
        */


        
// FUNCIÓN PARA DIBUJAR DATA OMdb EN PANATALLA
const drawOMdbFilms = (data) => {
    myContent.innerHTML = '';
    dataFilms ="";
    films = "";
    data.Search.forEach(element => {
    //EL ID DEL DIV ES PARA LLAMAR E IMPRIMIR EL MODAL
    films += 
    
    `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">    
    <div class="card bg-light mb-3" align= "middle">
    <div id = "${element.imdbID}" data-toggle="modal" data-target = "modal${element.imdbID}" class = "modal-trigger">
        <img src= "${element.Poster}" class= "card-img-top" alt= "${element.Title}" id="cardImage" onerror="this.onerror=null;this.src='img/notavail.jpg';">
        <div class="card-body text-dark">
            <p class="card-name">Title: ${element.Title}</p>
            <p class="card-num"> Year: ${element.Year}</p>
        </div>
    </div>
    </div>
    </div>
    `  
   
    });
    myContent.innerHTML = films;
}

// FILTRAR PELICULAS POR GENERO
btnAction.addEventListener('click', () => {
    genresFilter()
})
const genresFilter = () => {
    let genresFilms = '&with_genres=28'
    fetch(urlTMdb+genresFilms)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        console.log(urlTMdb+genresFilms);
        console.log(data.results.length);
        console.log(data.results[0].title); 
        drawTMdbFilms(data);
    });
}

// FUNCIÓN PARA DIBUJAR DATA TMdb EN PANATALLA
const drawTMdbFilms = (data) => {
    myContent.innerHTML = '';
    dataFilms ="";
    films = "";
    
    data.results.forEach(element => {
    let poster = "https://image.tmdb.org/t/p/w500"+element.poster_path;
    //EL ID DEL DIV ES PARA LLAMAR E IMPRIMIR EL MODAL
    films += 
    `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">    
    <div class="card bg-light mb-3" align= "middle">
    <div id = "${element.id}" data-toggle="modal" data-target = "modal${element.id}" class = "modal-trigger">
        <img src= "${poster}" class= "card-img-top" alt= "${element.title}" onerror="this.onerror=null;this.src='img/notavail.jpg';">
        <div class="card-body text-dark">
            <p class="card-name">Title: ${element.title}</p>
            <p class="card-num"> Year: ${element.release_date}</p>
        </div>
    </div>
    </div>
    </div>
    `  
    });
    myContent.innerHTML = films;
}