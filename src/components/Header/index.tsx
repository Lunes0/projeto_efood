import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import type { RootReducer } from '../../store'

import background from '../../assets/images/background.png'
import { BackLink, CartHeader, HeaderHome, HeaderRestaurant, RestaurantBanner } from './styles'
import Logo from '../../assets/icons/logo'
import CartIcon from '../../assets/icons/basket'
import Cart from '../Sidebar/Cart'

type Props = {
  type: 'home' | 'restaurant'
  restaurantImage?: string
  category?: string
  name?: string
}

const Header = ({ type, restaurantImage, category, name }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <>
      {type === 'home' && (
        <HeaderHome style={{ backgroundImage: `url(${background})` }}>
          <nav className="container">
            <div>
              <Logo />
              <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
            </div>
          </nav>
        </HeaderHome>
      )}
      {type === 'restaurant' && (
        <HeaderRestaurant style={{ backgroundImage: `url(${background})` }}>
          <Cart />
          <CartHeader className="container">
            <BackLink onClick={() => navigate('/')}>Restaurantes</BackLink>
            <span className="logo-center">
              <Logo />
            </span>
            <h3 onClick={openCart}>
              {totalQuantity} produtos no carrinho
              <CartIcon />
            </h3>
          </CartHeader>
          <RestaurantBanner style={{ backgroundImage: `url(${restaurantImage})` }}>
            <div className="overlay">
              <div className="container">
                <h2 className="category">{category}</h2>
                <h2 className="title">{name}</h2>
              </div>
            </div>
          </RestaurantBanner>
        </HeaderRestaurant>
      )}
    </>
  )
}

export default Header
