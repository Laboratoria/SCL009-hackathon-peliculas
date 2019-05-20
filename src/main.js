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
    //const nameMovie = '&s='+ document.getElementById('nameMovie').value
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

        let element = document.getElementById("element")
    
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
            element.innerHTML+=
    `
       
    
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">    
    <div class="card bg-light mb-3" align= "middle">
    <img src= "${response.Search[index].Poster}" class= "card-img-top" alt= "Card image" id="cardImage">
    <div class="card-body text-dark">
    <p class="card-name">Title: ${response.Search[index].Title}</p>
    <p class="card-num"> Year: ${response.Search[index].Year}</p>
    </div>
    </div>
    
  
        `  
        }   
    }
    })

    //  <p>${response.Search[index].Title}</p>
      //  <img src= "${response.Search[index].Poster}" alt="image" >
       // <p>${response.Search[index].Year}</p>
 



      // console.log(url + nameMovie);
      //console.log(response);  
      //console.log(response.Search[0].imdbID); 
        //loadFilms(data)
    
    //.then(function(data) {
       // drawFilms(data)
       // console.log(data.Title);
    //})

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