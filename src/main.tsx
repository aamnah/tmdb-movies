import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NowPlaying from './routes/NowPlaying.tsx'
import Popular from './routes/Popular.tsx'
import Upcoming from './routes/Upcoming.tsx'
import TopRated from './routes/TopRated.tsx'
import ErrorPage from './routes/Error.tsx'
import Root from './routes/root.tsx'
import Movie from './routes/Movie.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'now-playing',
        element: <NowPlaying />,
      },
      {
        path: 'popular',
        element: <Popular />,
      },
      {
        path: 'upcoming',
        element: <Upcoming />,
      },
      {
        path: 'top-rated',
        element: <TopRated />,
      },
      {
        path: 'movie/:movieId',
        element: <Movie />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
