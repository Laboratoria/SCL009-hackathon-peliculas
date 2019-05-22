// DECLARACIÓN DE VARIABLES GLOBALES

// URL OMDB
const url= 'https://www.omdbapi.com/?'
// URL OMDB API + APIKEY 
const urlOMdb = 'http://www.omdbapi.com/?apikey=857ae5f9&page=1&plot=full&type=movie';
// URL TMDB API + APIKEY
const urlTMdb ="https://api.themoviedb.org/3/discover/movie?api_key=665c6e4dc27510e065d9033504dfed36";
// URL DE IMG DE POSTER OMDB API + APIKEY
const urlPoster = 'http://img.omdbapi.com/?apikey=857ae5f9';
// URL DE OMDB API POR ID
const urlId = 'http://www.omdbapi.com/?apikey=857ae5f9&type=movie&plot=full&i=';
const myContent = document.getElementById("myContent");
const movieSearchId = document.getElementById("movieSearchId");
let films = '';
let dataFilms = '';
let moviesModal;
let cardsModal = '';
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
    movieSearchId.innerHTML = '';
    dataFilms ="";
    films = "";
    data.Search.forEach(element => {
    //EL ID DEL DIV ES PARA LLAMAR E IMPRIMIR EL MODAL
    films +=  
    `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">    
    <div class="card bg-light mb-3" align= "middle">
        <a data-toggle="modal" data-target= "#exampleModal${element.imdbID}">
            <img src= "${element.Poster}" class= "card-img-top" alt= "${element.Title}" id="cardImage" onerror="this.onerror=null;this.src='img/notavail.jpg';">
            <div class="card-body text-dark">
                <p class="card-name">Title: ${element.Title}</p>
                <p class="card-num"> Year: ${element.Year}</p>
            </div>
        </a>
    </div>
    </div>
    `  
    // Consultar a la url omdb por ID tomando el id de movies
   fetch(urlId + element.imdbID)
   .then(response => response.json())
   .then(response => {
       moviesModal = response;
       console.log(moviesModal);
       cardsModal += 
       `  
        <div class="modal fade" id="exampleModal${moviesModal.imdbID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-md" role="document">
                <div class="modal-content">
                    <div class="x-close">                     
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>  
                    </div>
                    <div class="modal-body">
                        <div class = "title-modal">
                            <h5>${moviesModal.Title} ${moviesModal.Year}</h5>  
                        </div>           
                    <div class= "modal-img">
                        <img src =${moviesModal.Poster} class="img-movie-poster">
                    </div>
                    <div>
                        <p>Sinopsis:${moviesModal.Plot} </p>
                        <p>Genero: ${moviesModal.Genre}.</p>
                        <p>Actores: ${moviesModal.Actors}</p>
                        <p>Director: ${moviesModal.Director}</p>
                        <p>Premios: ${moviesModal.Awards}</p>
                        <p>Website:<a href= "${moviesModal.Website}">${moviesModal.Website}</a> </p>
                     </div>
                    </div>
                </div>
             </div>
        </div>
        `
    //Jquery del modal
    $("#exampleModal" + moviesModal.imdbID).on("shown.bs.modal", function () {
        $("#myInput").trigger("focus")
    });
    // Imprimiendo el modal
    movieSearchId.innerHTML = cardsModal;
});   
myContent.innerHTML = films;
    })
}

// FILTRAR PELICULAS POR GENERO
genre.addEventListener('change', () => {
    genresFilter()
})
const genresFilter = () => {
    let genresFilms = '&with_genres='+document.getElementById("genre").value;
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