import './GenreTags.scss'

interface GenreTagsProps {
  genres: string[]
}
export default function GenreTags({ genres }: GenreTagsProps) {
  // let genres = useContext(AppContext)

  function renderGenres(genresArray: string[]) {
    // console.log(`movieGenres inside GenerateTags`, genresArray)

    let genreTags = genresArray.map((genre, index) => {
      // console.log(`Genre Name:`, genre)
      // console.log(genresArray[genre])
      return (
        <span className="GenreTagItem" key={index}>
          <small>{genre}</small>
        </span>
      )
    })
    return genreTags
  }
  return <div className="GenreTagList">{renderGenres(genres)}</div>
}
