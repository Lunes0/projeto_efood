import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { open, clear } from '../../store/reducers/sidebar'
import type { RootReducer } from '../../store'

import Checkout from '../../pages/Checkout'

import background from '../../assets/images/background.png'
import Logo from '../../assets/icons/logo'
import CartIcon from '../../assets/icons/basket'

import * as S from './styles'

type Props = {
  type: 'home' | 'restaurant'
  restaurantImage?: string
  category?: string
  name?: string
}

const Header = ({ type, restaurantImage, category, name }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  const backToRestaurants = () => {
    dispatch(clear())
    navigate('/')
  }

  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <>
      {type === 'home' && (
        <S.HeaderHome style={{ backgroundImage: `url(${background})` }}>
          <nav className="container">
            <div>
              <Logo />
              <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
            </div>
          </nav>
        </S.HeaderHome>
      )}
      {type === 'restaurant' && (
        <S.HeaderRestaurant style={{ backgroundImage: `url(${background})` }}>
          {isOpen ? <Checkout /> : ''}
          <S.CartHeader className="container">
            <S.BackLink onClick={backToRestaurants}>Restaurantes</S.BackLink>
            <span className="logo-center">
              <Logo />
            </span>
            <h3 onClick={openCart}>
              {totalQuantity} produtos no carrinho
              <CartIcon />
            </h3>
          </S.CartHeader>
          <S.RestaurantBanner style={{ backgroundImage: `url(${restaurantImage})` }}>
            <div className="overlay">
              <div className="container">
                <h2 className="category">{category}</h2>
                <h2 className="title">{name}</h2>
              </div>
            </div>
          </S.RestaurantBanner>
        </S.HeaderRestaurant>
      )}
    </>
  )
}

export default Header
