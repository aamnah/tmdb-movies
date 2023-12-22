import { useLoaderData, Link } from 'react-router-dom'

export default function MovieList() {
  const movies = useLoaderData()

  function renderMovies(movies) {
    return movies.map((item, index) => (
      <li key={index}>
        <Link to={`/movie/${item.id}`}>{item.title}</Link>
      </li>
    ))
  }

  return (
    <>
      <h1>Popular Movies</h1>
      <ul>{renderMovies(movies)}</ul>
    </>
  )
}
