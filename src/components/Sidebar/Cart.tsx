import { useDispatch, useSelector } from 'react-redux'

import { remove, checkoutOpen } from '../../store/reducers/sidebar'
import type { RootReducer } from '../../store'
import { getTotalPrice, localePrice } from '../../utils'

import { ButtonDishes } from '../CardDishes/styles'

import * as S from './styles'

const Cart = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const removeItem = (name: string) => {
    dispatch(remove(name))
  }

  const goToCheckout = () => {
    dispatch(checkoutOpen())
  }

  return (
    <S.Sidebar>
      <ul>
        {items.map((item) => (
          <S.CartItem key={item.dish.nome}>
            <img src={item.dish.foto} alt={item.dish.nome} />
            <div>
              <h3>{item.dish.nome}</h3>
              <span>{localePrice(Number(item.dish.preco))}</span>
              <span className="item-qnt">Quantidade: {item.quantity}</span>
            </div>
            <button onClick={() => removeItem(item.dish.nome)} />
          </S.CartItem>
        ))}
      </ul>
      <S.TotalPrice>
        <span>Valor total:</span>
        <span>{localePrice(getTotalPrice(items))}</span>
      </S.TotalPrice>
      <ButtonDishes disabled={items.length === 0} onClick={goToCheckout}>
        Continuar com a entrega
      </ButtonDishes>
    </S.Sidebar>
  )
}

export default Cart
