import AppHeader from '../components/AppHeader'
import { Outlet } from 'react-router-dom'
import '../components/App.scss'

export default function Root() {
  return (
    <div className="App flex flex-col p-4 md:p-8 lg:p-12 text-slate-50">
      <AppHeader />
      <Outlet />
    </div>
  )
}
