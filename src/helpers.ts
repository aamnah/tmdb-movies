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

export function getMovieTrailer(videos: Video[]): Trailer | undefined {
  const baseUrl = `https://www.youtube.com/watch?v=`
  // console.table(videos)

  // get all videos where type: Trailer, official: true and site: YouTube
  const trailers = videos.filter(
    (video) =>
      video.type === 'Trailer' && video.official && video.site === 'YouTube'
    // checking for video.site because i am using youtube specific video player
  )
  // console.log('trailers: ')
  // console.table(trailers)

  if (!trailers) {
    // if no trailers, return undefined
    // make sure to check if you have trailers before showing related buttons/modals
    return
  }

  // i don't need to set it to videos[0] because i am returning
  // if no trailers before this code is reached
  // but TS won't shut up
  let trailerVideo = videos[0]

  if (trailers && trailers.length > 1) {
    console.log('more than one trailer video')
    // TODO: Decide on how to handle multiple trailer videos
    // do i show multiple buttons and modals
    // or do i pick one trailer?
    trailerVideo = trailers[0]
  } else if (trailers) {
    trailerVideo = trailers[0]
    console.log('only one trailer video')
  }

  const trailer = {
    name: trailerVideo.name,
    id: trailerVideo.key,
    url: `${baseUrl}${trailerVideo.key}`,
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
