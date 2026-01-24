import { localePrice } from '../../utils'

import { ButtonDishes, Card } from './styles'

type Props = {
  onAddToCart?: () => void
  name: string
  description: string
  price: string
  image: string
}

const CardDishes = ({ onAddToCart, description, name, price, image }: Props) => {
  return (
    <Card>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <ButtonDishes onClick={onAddToCart}>
        Adicionar ao carrinho - {localePrice(Number(price))}
      </ButtonDishes>
    </Card>
  )
}

export default CardDishes
