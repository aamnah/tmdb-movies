import { Params, useLoaderData } from 'react-router-dom'
import { fetchMovieDetails } from '../api/api'
import GenreTags from '../components/GenreTags'
import { getGenreNames, getPosterURL } from '../helpers'
import { MovieDetail, poster_sizes } from '../api/tmdb_api.types'

export default function Movie() {
  const movie = useLoaderData()

  return (
    <>
      <h1 className="text-3xl font-semibold">{movie.title}</h1>
      <p>{movie.release_date}</p>
      <div className="grid grid-cols-[1fr_2fr]">
        <img
          src={getPosterURL({
            path: movie.poster_path,
            width: poster_sizes.w500,
          })}
          alt={movie.title}
          className="w-full rounded-2xl"
        />
      </div>
      <GenreTags genres={getGenreNames(movie.genres)} />
      <p className="text-xl">{movie.tagline}</p>
      <p>{movie.overview}</p>
    </>
  )
}

export async function loader({ params }: Params) {
  const movie = await fetchMovieDetails(params.movieId)
  return movie
}
