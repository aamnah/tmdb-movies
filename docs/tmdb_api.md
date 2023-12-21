API
---

API endpoints that i need to call

- [Now playing](https://developer.themoviedb.org/reference/movie-now-playing-list)
- [Videos (to get trailer videos by movieId)](https://developer.themoviedb.org/reference/movie-videos)
- [Genres (to get genres by genreId)](https://developer.themoviedb.org/reference/genre-movie-list)

```md
# Get a list of movies that are currently in theatres.
GET https://api.themoviedb.org/3/movie/now_playing

# Get the list of official genres for movies.
GET https://api.themoviedb.org/3/genre/movie/list

# Videos
GET https://api.themoviedb.org/3/movie/{MOVIE_ID}/videos

# Get movie details (including genre names) plus videos
https://api.themoviedb.org/3/movie/{MOVIE_ID}?api_key={API_KEY}&append_to_response=videos
```
