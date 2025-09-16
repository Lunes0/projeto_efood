import { useDispatch, useSelector } from 'react-redux'

import Cart from '../../components/Sidebar/Cart'
import Payment from '../../components/Sidebar/Payment'

import { close } from '../../store/reducers/sidebar'
import type { RootReducer } from '../../store'

import { CartContainer, Overlay } from '../../components/Sidebar/styles'

const Checkout = () => {
  const dispatch = useDispatch()
  const { isOpen, checkout } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? '' : 'display-none'}>
      <Overlay onClick={closeCart} />
      {isOpen && !checkout && <Cart />}
      {isOpen && checkout && <Payment />}
    </CartContainer>
  )
}

export default Checkout
