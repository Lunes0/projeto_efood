import { useNavigate } from 'react-router-dom'

import background from '../../assets/images/background.png'
import { BackLink, CartHeader, HeaderHome, HeaderRestaurant, RestaurantBanner } from './styles'
import Logo from '../../assets/icons/logo'
import Cart from '../../assets/icons/basket'

type Props = {
  type: 'home' | 'restaurant'
  restaurantImage?: string
  category?: string
  name?: string
}

const Header = ({ type, restaurantImage, category, name }: Props) => {
  const navigate = useNavigate()

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
          <CartHeader className="container">
            <BackLink onClick={() => navigate('/')}>Restaurantes</BackLink>
            <span className="logo-center">
              <Logo />
            </span>
            <h3>
              0 produtos no carrinho
              <Cart />
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
