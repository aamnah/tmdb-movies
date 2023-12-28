import { ReactNode } from 'react'
import { useLoaderData } from 'react-router-dom'

import {
  MovieList as MovieListInterface,
  poster_sizes,
} from '../api/tmdb_api.types'
import Card from '../components/Card'
import CardList from '../components/CardList'
import { getPosterURL } from '../helpers'

export default function MovieList() {
  const movies = useLoaderData() as MovieListInterface

  function renderMovies(movies: MovieListInterface) {
    return movies.map(
      (item, index): ReactNode => (
        <Card
          key={item.index}
          id={item.id}
          title={item.title}
          overview={item.overview}
          posterPath={getPosterURL({
            path: item.poster_path,
            width: poster_sizes.w342,
          })}
          rating={item.vote_average.toFixed(1)}
        />
      )
    )
  }

  return <CardList>{renderMovies(movies)}</CardList>
}
