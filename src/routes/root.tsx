import '../components/App.scss'

import { Outlet } from 'react-router-dom'

import AppHeader from '../components/AppHeader'

export default function Root() {
  return (
    <div className="App flex flex-col p-4 md:p-8 lg:p-10 text-slate-50">
      <AppHeader />
      <Outlet />
    </div>
  )
}
