import pasta from '../../assets/images/pasta.png'

import { ButtonDishes, Card } from './styles'

const CardDishes = () => {
  return (
    <Card>
      <img src={pasta} alt="" />
      <h3>Nome do Prato</h3>
      <p>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e
        um toque de azeite. Sabor e simplicidade!
      </p>
      <ButtonDishes>Adicionar ao carrinho</ButtonDishes>
    </Card>
  )
}

export default CardDishes
