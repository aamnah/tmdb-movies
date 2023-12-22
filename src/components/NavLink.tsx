import { NavLink, NavLinkProps } from 'react-router-dom'

export default function StyledNavLink({ children, ...rest }: NavLinkProps) {
  return (
    <NavLink
      {...rest}
      className="flex gap-2 justify-start content-center items-center border-transparent border-2 rounded-md font-semibold no-underline py-1 px-6"
    >
      {children}
    </NavLink>
  )
}
