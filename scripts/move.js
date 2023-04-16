// Load movie data from JSON file
const movies = [
   { title: "The Godfather", genre: "Crime", rating: 9.2, year: 1972 },
   { title: "The Shawshank Redemption", genre: "Drama", rating: 9.3, year: 1994 },
   { title: "The Dark Knight", genre: "Action", rating: 9.0, year: 2008 },
   { title: "Forrest Gump", genre: "Drama", rating: 8.8, year: 1994 },
   { title: "Inception", genre: "Action", rating: 8.8, year: 2010 },
   { title: "Pulp Fiction", genre: "Crime", rating: 8.9, year: 1994 },
   { title: "The Matrix", genre: "Action", rating: 8.7, year: 1999 },
   { title: "The Silence of the Lambs", genre: "Thriller", rating: 8.6, year: 1991 },
   { title: "The Departed", genre: "Crime", rating: 8.5, year: 2006 },
   { title: "Schindler's List", genre: "Drama", rating: 8.9, year: 1993 }
 ];
 
 // Function to recommend movies based on user input
 function recommend() {
   const genre = document.getElementById("genre").value.toLowerCase();
   const rating = Number(document.getElementById("rating").value);
   const year = Number(document.getElementById("year").value);
   
   // Filter movies based on user preferences
   const recommendedMovies = movies.filter(movie => {
     return movie.genre.toLowerCase() === genre && movie.rating >= rating && movie.year === year;
   });
   
   // Display recommended movies
   const recommendationsDiv = document.getElementById("recommendations");
   recommendationsDiv.innerHTML = "";
   
   if (recommendedMovies.length === 0) {
     recommendationsDiv.innerHTML = "No movies found!";
   } else {
     recommendedMovies.forEach(movie => {
       const movieDiv = document.createElement("div");
       movieDiv.innerHTML = `${movie.title} (${movie.year}) - ${movie.genre} - ${movie.rating}`;
       recommendationsDiv.appendChild(movieDiv);
     });
   }
 }
 