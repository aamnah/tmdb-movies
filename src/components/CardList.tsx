import { ReactNode } from 'react'

interface Props<T> {
  props: T
  children: ReactNode
}
export default function CardList<T>({ children, ...rest }: Props<T>) {
  return (
    <div
      {...rest}
      className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
    >
      {children}
    </div>
  )
}
