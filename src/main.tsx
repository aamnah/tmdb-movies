import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NowPlaying from './routes/NowPlaying.tsx'
import Popular from './routes/Popular.tsx'
import Upcoming from './routes/Upcoming.tsx'
import TopRated from './routes/TopRated.tsx'
import ErrorPage from './routes/Error.tsx'
import Root from './routes/root.tsx'
import Movie, { loader as movieLoader } from './routes/Movie.tsx'
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from './api/api.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <NowPlaying />,
      },
      {
        path: 'now-playing',
        element: <NowPlaying />,
        loader: fetchNowPlayingMovies,
      },
      {
        path: 'popular',
        element: <Popular />,
        loader: fetchPopularMovies,
      },
      {
        path: 'upcoming',
        element: <Upcoming />,
        loader: fetchUpcomingMovies,
      },
      {
        path: 'top-rated',
        element: <TopRated />,
        loader: fetchTopRatedMovies,
      },
      {
        path: 'movie/:movieId',
        element: <Movie />,
        loader: movieLoader,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
