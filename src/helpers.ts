export interface MovieVideoResponseType {
  id: string
  iso_639_1: string
  iso_3166_1: string
  key: string
  name: string
  official: boolean
  published_at: string
  site: string
  size: number
  type: string
}

export function getPosterURL({ path = '', width = 154 }) {
  // https://developer.themoviedb.org/docs/image-basics
  // available sizes: https://developer.themoviedb.org/reference/configuration-details
  return `https://image.tmdb.org/t/p/w${width}${path}`
  // the poster_path returned from the API includes `/` at the beginning
}

export async function getMovieTrailer(videos: Array<MovieVideoResponseType>) {
  const baseUrl = `https://www.youtube.com/watch?v=`
  console.table(videos)
  let videoObject = {
    name: videos[0].name,
    id: videos[0].key,
    url: `${baseUrl}${videos[0].key}`,
  }

  if (videos.length > 1) {
    videos.map((vid) => {
      // .includes() is case-sensitive
      if (
        vid.name.toLowerCase().includes('official') &&
        vid.name.toLowerCase().includes('trailer')
      ) {
        console.log(`OFFICIAL TRAILER_: Name: ${vid.name}, Key: ${vid.key}`)

        videoObject.name = vid.name
        videoObject.url = `${baseUrl}${vid.key}`

        return videoObject
      } else if (vid.name.toLowerCase().includes('trailer')) {
        console.log(`TRAILER_: Name: ${vid.name}, Key: ${vid.key}`)

        videoObject.name = vid.name
        videoObject.url = `${baseUrl}${vid.key}`

        return videoObject
      }
      return videoObject
    })
  }
  // console.log(`videoObject2:`, videoObject)
  return videoObject
}
