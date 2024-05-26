import './MovieCard.scss'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { fetchMovieDetails } from '../api/api'
import { MovieDetail } from '../api/tmdb_api.types'
import { getGenreNames } from '../helpers'

interface Props {
  id: number
  title: string
  overview: string
  posterPath: string
  rating: number
}

export default function MovieCard({ id, title, posterPath, rating }: Props) {
  const [movieDetails, setMovieDetails] = useState<MovieDetail>()

  useEffect(() => {
    fetchMovieDetails(id)
      .then((movie) => setMovieDetails(movie))
      .catch((e) =>
        console.error(`CThere was an error with setting movie; , ${e}`)
      )
  }, [id])

  return (
    <>
      <Link
        className="MovieCard w-full flex flex-row self-stretch overflow-hidden border-2 border-transparent rounded-2xl hover:cursor-pointer"
        to={`/movie/${id}`}
      >
        <img src={posterPath} alt={title} className="MovieCard__Poster" />
        <div className="p-3">
          <header className="flex flex-column mb-3 md:flex-row md:justify-between md:content-center md:items-center">
            <h2 className="MovieCard__Title m-0 mb-2 ">{title}</h2>
            <span>
              <strong>{rating}</strong>
              <small> / 10</small>
            </span>
          </header>

          {movieDetails
            ? getGenreNames(movieDetails.genres).map((item: string, index) => (
                <small
                  key={index}
                  className="[&:not(:last-child)]:after:content-['\2022'] after:ml-0.5 after:text-slate-700 text-slate-400"
                >
                  {' '}
                  {item}{' '}
                </small>
              ))
            : null}
        </div>
      </Link>
    </>
  )
}

// TODO: [ ] Add a word count function to trim overview text that is too long
// https://linuxhint.com/word-count-using-javascript/
// https://answers.acrobatusers.com/How-set-word-limit-character-limit-text-field-q109228.aspx

{
  /* <MovieCard
          id={615656}
          title="Meg 2: The Trench"
          overview="An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival."
          posterPath={getPosterURL({path: `/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg`, width: 300})}
          rating={7}
        /> */
}
