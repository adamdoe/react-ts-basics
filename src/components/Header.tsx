import { type FC } from 'react'

type HeaderProps = {
  image: { src: string; alt: string }
  children: React.ReactNode
}

export const Header: FC<HeaderProps> = ({ image, children }) => {
  const { src, alt } = image
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  )
}

export default Header
