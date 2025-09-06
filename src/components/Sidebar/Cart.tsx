import { useDispatch, useSelector } from 'react-redux'

import { close, remove } from '../../store/reducers/cart'
import type { RootReducer } from '../../store'

import { Sidebar, Overlay, CartContainer, CartItem, TotalPrice } from './styles'
import { ButtonDishes } from '../CardDishes/styles'
import { localePrice } from '../../utils'

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (name: string) => {
    dispatch(remove(name))
  }

  const getTotalPrice = () => {
    return items.reduce((acc, crr) => acc + crr.dish.preco * crr.quantity, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.dish.nome}>
              <img src={item.dish.foto} alt={item.dish.nome} />
              <div>
                <h3>{item.dish.nome}</h3>
                <span>{localePrice(item.dish.preco)}</span>
                <span className="item-qnt">Quantidade: {item.quantity}</span>
              </div>
              <button onClick={() => removeItem(item.dish.nome)} />
            </CartItem>
          ))}
        </ul>
        <TotalPrice>
          <span>Valor total:</span>
          <span>{localePrice(getTotalPrice())}</span>
        </TotalPrice>
        <ButtonDishes>Continuar com a entrega</ButtonDishes>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
