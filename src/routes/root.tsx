import { Outlet } from 'react-router-dom'

import AppHeader from '../components/AppHeader'
import Nav from '../components/Nav'

export default function Root() {
  return (
    <>
      <Nav />
      <div className="flex flex-col p-4 md:p-8 lg:p-10 text-slate-50 [&_a]:text-white">
        <AppHeader />
        <Outlet />
      </div>
    </>
  )
}
