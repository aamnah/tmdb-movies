import { AxiosError } from 'axios'
import { isRouteErrorResponse } from 'react-router-dom'

import { Genre, poster_sizes, Video } from './api/tmdb_api.types'

interface Trailer {
  name: string
  id: string
  url: string
}

export function getErrorMessage(error: unknown): string {
  if (isRouteErrorResponse(error)) {
    return `${error.status} ${error.statusText}`
  } else if (error != undefined && error instanceof Error) {
    return error.message
  } else if (error instanceof AxiosError) {
    return error.message
  } else if (typeof error === 'string') {
    return error
  } else {
    console.error(error)
    return 'Unknown error'
  }
}

export function getPosterURL({
  path = '',
  width = poster_sizes.w154,
}: {
  path: string
  width: string
}) {
  // https://developer.themoviedb.org/docs/image-basics
  // available sizes: https://developer.themoviedb.org/reference/configuration-details
  return `https://image.tmdb.org/t/p/${width}${path}`
  // the poster_path returned from the API includes `/` at the beginning
}

export function getGenreNames(genresArray: Genre[]): string[] {
  // Takes an array of Genres objects { id: number; name: string } and
  // returns an array of only names string[]
  const genreNames: string[] = []
  genresArray.map((genre: Genre) => {
    genreNames.push(genre.name)
  })
  return genreNames
}

export function getMovieTrailer(videos: Video[]): Trailer {
  const baseUrl = `https://www.youtube.com/watch?v=`
  console.table(videos)

  // set the first video as default trailer
  const trailer = {
    name: videos[0].name,
    id: videos[0].key,
    url: `${baseUrl}${videos[0].key}`,
  }

  // if more than one video returned
  if (videos.length > 1) {
    videos.map((vid) => {
      // .includes() is case-sensitive
      if (
        // see if name includes the words 'official' and 'trailer'
        vid.name.toLowerCase().includes('official') &&
        vid.name.toLowerCase().includes('trailer')
      ) {
        console.log(`OFFICIAL TRAILER_: Name: ${vid.name}, Key: ${vid.key}`)

        trailer.name = vid.name
        trailer.url = `${baseUrl}${vid.key}`

        return trailer
      } else if (vid.name.toLowerCase().includes('trailer')) {
        // see if name includes the word 'trailer'
        console.log(`TRAILER_: Name: ${vid.name}, Key: ${vid.key}`)

        trailer.name = vid.name
        trailer.url = `${baseUrl}${vid.key}`

        return trailer
      }
      // return trailer
    })
  }

  return trailer
}

export function formatDate(dateString: Date) {
  // if date is in the future, it is for an upcoming movie, show month and date as well
  // if date is in the past, just show the year
  const date = new Date(dateString)
  const today = new Date()
  const lang = 'en-US'

  if (date > today) {
    console.log(`Date is in the future`)
    return date.toLocaleString(lang, { month: 'short', year: 'numeric' })
  } else {
    console.log(`Date has passed`)
    return date.toLocaleString(lang, { year: 'numeric' })
  }
}
