const apiKey = 
const randomMovieButton = document.getElementById('randomMovieButton');
const movieInfo = document.getElementById('movieInfo');

randomMovieButton.addEventListener('click', () => {
// Hacer la solicitud a la API para obtener películas populares
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
.then(response => response.json())
.then(data => {
    
// Seleccionar una película aleatoria de la lista
const randomIndex = Math.floor(Math.random() * data.results.length);
const randomMovie = data.results[randomIndex];

// Mostrar la información de la película
movieInfo.innerHTML = `
<h2>${randomMovie.title}</h2>
<p>${randomMovie.overview}</p>
<img src="https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}" alt="${randomMovie.title}" />
`;
})
.catch(error => {
console.error('Error al obtener la película', error);
movieInfo.innerHTML = 'Error al cargar la película.';
});
});