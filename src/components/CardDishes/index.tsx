import { localePrice } from '../../utils'

import { ButtonDishes, Card } from './styles'

type Props = {
  onAddToCart?: () => void
  name: string
  description: string
  price: number
  image: string
}

const CardDishes = ({ onAddToCart, description, name, price, image }: Props) => {
  return (
    <Card>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <ButtonDishes onClick={onAddToCart}>
        Adicionar ao carrinho - {localePrice(price)}
      </ButtonDishes>
    </Card>
  )
}

export default CardDishes
