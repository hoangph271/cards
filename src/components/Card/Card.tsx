import reactLogo from '../../assets/react.svg'
import './Card.css'

export type CardData = {
  title: string
  logo: string
  caption: string
}

type CardProps = CardData
export const Card = ({ title, logo, caption }: CardProps) => {
  return (
    <article className="card flex flex-col">
      <header>{title}</header>
      <figure className="flex flex-col">
        <img src={logo} />
        <figcaption>{caption}</figcaption>
      </figure>
    </article>
  )
}

const _randomItem = (items: any[]) => items[Math.floor(items.length * Math.random())]
export const _getRandomCard = () => {
  return {
    title: _randomItem(['King', 'Queen', 'Jack', 'Joker']),
    logo: _randomItem([reactLogo, './vite.svg']),
    caption: 'Add caption here, dude...!'
  }
}
