import background from '../../assets/images/background.png'
import { HeaderContainer } from './styles'
import Logo from '../../assets/icons/logo'

type Props = {
  type: 'home' | 'restaurant'
  restaurantImage?: string
}

const Header = ({ type, restaurantImage }: Props) => {
  return (
    <HeaderContainer style={{ backgroundImage: `url(${background})` }}>
      <nav className="container">
        <div>
          <Logo />
          {type === 'home' && (
            <>
              <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
            </>
          )}
          {type === 'restaurant' && restaurantImage && (
            <img src={restaurantImage} alt="Restaurante" />
          )}
        </div>
      </nav>
    </HeaderContainer>
  )
}

export default Header
