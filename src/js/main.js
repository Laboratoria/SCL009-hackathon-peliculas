// DECLARACIÓN DE VARIABLES GLOBALES

// URL + APIKEY 
//const url = 'http://www.omdbapi.com/?apikey=857ae5f9&page=2'
//const url = 'http://www.omdbapi.com/?apikey=857ae5f9'
const url= 'https://www.omdbapi.com/?'
//const url2 = 'http://www.omdbapi.com/i?=imdbID&apikey=857ae5f9'
// URL DE IMG DE POSTER + APIKEY
const urlPoster = 'http://img.omdbapi.com/?apikey=857ae5f9'

// BUSCAR PELICULA POR NOMBRE
btn.addEventListener('click', () => {
    searchFilms()
})
const searchFilms = () => {
// GUARDA EL NOMBRE DE LA PELICULA PARA CONCATENARLO CON LA URL
// const nameMovie = '&s='+ document.getElementById('nameMovie').value
// const nameMovie = 't='+document.getElementById('nameMovie').value+'&apikey=857ae5f9'
   const nameMovie = 's='+document.getElementById('nameMovie').value+'&apikey=857ae5f9'
   fetch(url+nameMovie)
    .then(response => response.json())
    .then(response => { response.Search
       console.log(response.Search);
       /* var title = response.Title;
        var image = response.Poster;
        genre = response.Genre;
        plot = response.Plot;*/

        let myContent = document.getElementById("myContent")
    
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
        
    //por busqueda
        for(let index = 0; index < response.Search.length; index++){
        if(response.Search[index].Type=="movie"){
            myContent.innerHTML+=
            `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">    
            <div class="card bg-light mb-3" align= "middle">
            <div id = "${response.Search[index].imdbID}" data-toggle="modal" data-target = "modal${response.Search[index].imdbID}" class = "modal-trigger">
                <img src= "${response.Search[index].Poster}" class= "card-img-top" alt= "Card image" id="cardImage" onerror="this.onerror=null;this.src='img/notavail.jpg';">
                <div class="card-body text-dark">
                    <p class="card-name">Title: ${response.Search[index].Title}</p>
                    <p class="card-num"> Year: ${response.Search[index].Year}</p>
                </div>
            </div>

            <div id="modal${response.Search[index].imdbID}" class="modal">
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect btn-flat">X</a>
                </div>
                <div class="modal-content row">                        
                    <div id="poster" class="col s5 m5 l5">
                        <img src="${response.Search[index].Poster}" alt="${response.Search[index].Title}" onerror="this.onerror=null;this.src='img/notavail.jpg';"/>
                    </div>
                    <div id="description"class="col s7 m7 l7">
                        <h4>${response.Search[index].Title}</h4>
                        <p>${response.Search[index].Year}</p>          
                    </div>
                </div>
            </div>
            </div>
            </div>
            `  
        }   
        }
        $('.modal').modal();
    })
    
    //  <p>${response.Search[index].Title}</p>
    //  <img src= "${response.Search[index].Poster}" alt="image" >
    // <p>${response.Search[index].Year}</p>
}

// // DECLARACIÓN DE VARIABLES GLOBALES
// // URL OMDB API + APIKEY 
// const urlOMdb = 'http://www.omdbapi.com/?apikey=857ae5f9&page=1&plot=full&type=movie';
// // URL TMDB API + APIKEY
// const urlTMdb ="https://api.themoviedb.org/3/discover/movie?api_key=665c6e4dc27510e065d9033504dfed36";
// // URL DE IMG DE POSTER OMDB API + APIKEY
// const urlPoster = 'http://img.omdbapi.com/?apikey=857ae5f9';
// const myContent = document.getElementById('myContent');
// let films = '';
// let dataFilms = '';

// // BUSCAR PELICULA POR NOMBRE O PALABRA CLAVE
// btn.addEventListener('click', () => {
//     searchFilms()
// })
// const searchFilms = () => {
//     // GUARDA EL NOMBRE DE LA PELICULA PARA CONCATENARLO CON LA URL
//     let nameMovie = '&s='+ document.getElementById('nameMovie').value
//     fetch(urlOMdb + nameMovie)
//     .then(response => response.json())
//     .then((data) => {
//         console.log(data);
//         console.log(urlOMdb + nameMovie);
//         console.log(data.Search.length);
//         console.log(data.Search[0].Poster); 
//         drawFilms(data);
//     });
// }
// // FUNCIÓN PARA DIBUJAR DATA EN PANATALLA
// const drawFilms = (data) => {
//     myContent.innerHTML = '';
//     data.results.forEach(element => {
//     //EL ID DEL DIV ES PARA LLAMAR E IMPRIMIR EL MODAL
//     films = `
//         <div id="${element.imdbID}" data-target="modal${element.imdbID}" class="modal-trigger ">         
//             <img src="${element.Poster}" alt="${element.Title}" />
//             <p>${element.Title}</p>   
//         </div>`
//     dataFilms += films;
//     });
//     myContent.innerHTML = dataFilms;
// }

// // FILTRAR PELICULAS POR GENERO
// btnAction.addEventListener('click', () => {
//     genresFilter()
// })
// const genresFilter = () => {
//     let genresFilms = '&with_genres=28'
//     fetch(urlTMdb+genresFilms)
//     .then(response => response.json())
//     .then((data) => {
//         console.log(data);
//         console.log(urlTMdb+genresFilms);
//         console.log(data.results.length);
//         console.log(data.results[0].title); 
//         drawFilms(data);
//     });
// }