import { useLoaderData } from 'react-router-dom'
import { fetchMovieDetails } from '../api/api'

export default function Movie() {
  const movie = useLoaderData()

  return (
    <>
      <h1>{movie.title}</h1>
    </>
  )
}

export async function loader({ params }) {
  const movie = fetchMovieDetails(params.movieId)
  return movie
}
