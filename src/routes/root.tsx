import AppHeader from '../components/AppHeader'
import { Outlet } from 'react-router-dom'
import '../components/App.scss'

export default function Root() {
  return (
    <div className="App">
      <AppHeader />
      <Outlet />
    </div>
  )
}
