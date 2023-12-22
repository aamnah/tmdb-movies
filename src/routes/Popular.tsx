import { useLoaderData } from 'react-router-dom'

export default function PopularMoviesPage() {
  const movies = useLoaderData()

  function renderMovies(movies) {
    return movies.map((item, index) => <li key={index}>{item.title}</li>)
  }

  return (
    <>
      <h1>Popular Movies</h1>
      <ul>{renderMovies(movies)}</ul>
    </>
  )
}
