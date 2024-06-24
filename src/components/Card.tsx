import { Link } from 'react-router-dom'

interface Props<T> {
  props?: T
  id: number
  title: string
  overview: string
  posterPath: string
  rating: number
  className?: string
}

export default function Card({
  id,
  title,
  posterPath,
  rating,
  className,
  ...rest
}: Props<T>) {
  return (
    <Link
      to={`/movie/${id}`}
      className={`group flex flex-row sm:flex-col max-h-[231px] sm:max-h-full overflow-hidden bg-white/10 hover:bg-carmine/50 shadow-sm rounded-2xl  text-white/50 hover:text-white transition-all border-2 border-transparent border-solid hover:border-carmine
        ${className}`}
      {...rest}
    >
      <img
        src={posterPath}
        alt={title}
        className="max-h-[231px] sm:max-h-full rounded-l-2xl sm:rounded-t-2xl "
      />
      <div className="p-4">
        <h2 className="m-0 mb-2 text-white/90 group-hover:text-white">
          {title}
        </h2>
        <div className="flex gap-2 items-center">
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            role="presentation"
          >
            <path
              d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"
              fill="#f5c518"
            ></path>
          </svg>
          <span className="text-white/90 group-hover:text-white">{rating}</span>
        </div>
      </div>
    </Link>
  )
}
