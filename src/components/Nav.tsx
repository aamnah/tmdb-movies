import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const navigation = [
  {
    name: 'Now Playing',
    href: '/now-playing',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M6 20.1957V3.80421C6 3.01878 6.86395 2.53993 7.53 2.95621L20.6432 11.152C21.2699 11.5436 21.2699 12.4563 20.6432 12.848L7.53 21.0437C6.86395 21.46 6 20.9812 6 20.1957Z"></path>
      </svg>
    ),
  },
  {
    name: 'Popular',
    href: 'popular',
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M79.5081 22.5403C75.849 18.843 70.9951 16.9211 65.846 17.1292C60.2645 17.3548 54.6712 20.0618 49.6349 24.9689C46.1903 21.6115 42.5196 19.2941 38.7095 18.0783C35.0967 16.924 31.3738 16.8039 27.9407 17.7326C21.5618 19.464 16.4905 24.7111 14.7075 31.4351C12.5213 39.6821 15.4556 48.6438 22.7596 56.0238L49.1361 82.6781C49.2695 82.8129 49.4463 82.8861 49.6348 82.8861C49.8204 82.8861 50.0001 82.8099 50.1335 82.6781L76.5129 56.0238C82.0045 50.475 85.026 44.1146 85.2494 37.6338C85.4465 31.9239 83.3531 26.4221 79.5113 22.5401L79.5081 22.5403Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: 'Top Rated',
    href: '/top-rated',
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M49.9999 74.9751L67.9449 86.328C71.2318 88.4092 75.2524 85.3351 74.3891 81.444L69.6315 60.0888L85.4984 45.6989C88.3967 43.0781 86.8396 38.0985 83.0348 37.784L62.1514 35.9278L53.9774 15.7443C53.6714 14.9366 53.1269 14.2411 52.4161 13.7503C51.7054 13.2596 50.8621 12.9967 49.9984 12.9967C49.1347 12.9967 48.2914 13.2596 47.5806 13.7503C46.8699 14.2411 46.3253 14.9366 46.0194 15.7443L37.8485 35.8785L16.962 37.7346C13.1603 38.0553 11.6032 43.0318 14.4984 45.6526L30.3684 60.0395L25.6139 81.3946C24.7505 85.2858 28.7681 88.363 32.058 86.2817L49.9999 74.9751Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: 'Upcoming',
    href: '/upcoming',
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M91 26.0769V36.8462H68.0931L86.1198 18.6462C89.0731 19.9149 90.9933 22.8361 91 26.0769ZM60.5735 36.8462L79.2402 18H65.4538L46.7871 36.8462H60.5735ZM39.2138 36.8462L57.8804 18H44.1204L25.4538 36.8462H39.2138ZM36.5471 18H19.0009C14.5875 18.0135 11.0142 21.6211 11.0009 26.0769V36.8462H17.8809L36.5471 18ZM11 79.9231C11.0133 84.3789 14.5866 87.9866 19 88H83C87.4134 87.9865 90.9867 84.3789 91 79.9231V42.2308H11V79.9231Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-obsidian-50/5">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* Desktop Navigation */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <img
                      className="h-8 w-auto"
                      src="/mark.svg"
                      alt="TMDB Movies"
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/* Desktop nav */}
                    {navigation.map((item) => (
                      <NavLink to={item.href} key={item.name}>
                        {({ isActive, isPending }) => (
                          <span
                            className={`
                              flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium 
                              ${
                                isPending
                                  ? 'pending'
                                  : isActive
                                  ? 'bg-gray-900 text-white'
                                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                              }`}
                          >
                            {isActive ? (
                              <span className="w-4 h-4">{item?.icon}</span>
                            ) : null}{' '}
                            {item.name}
                          </span>
                        )}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right side menu */}
              {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"> */}
              {/* <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

              {/* Profile dropdown */}
              {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              {/* </div> */}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            {({ close }) => (
              <div className="space-y-1 px-2 pb-3 pt-2">
                {/* Mobile Navigation */}
                {navigation.map((item) => (
                  <NavLink
                    to={item.href}
                    key={item.name}
                    onClick={() => close()}
                  >
                    {({ isActive, isPending }) => (
                      <span
                        className={`
                        flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium 
                        ${
                          isPending
                            ? 'pending'
                            : isActive
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`}
                      >
                        {isActive ? (
                          <span className="w-4 h-4">{item?.icon}</span>
                        ) : null}{' '}
                        {item.name}
                      </span>
                    )}
                  </NavLink>
                ))}
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
