import { Banner, Button, Card, Infos, TagsContainer } from './styles'

import sushi from '../../assets/images/sushi.png'
import Star from '../../assets/icons/star'
import { useNavigate } from 'react-router-dom'

const CardRestaurants = () => {
  const navigate = useNavigate()

  return (
    <Card>
      <Banner>
        <img src={sushi} alt="" />
        <TagsContainer>
          <h4>Destaque da semana</h4>
          <h4>Japonesa</h4>
        </TagsContainer>
      </Banner>
      <Infos>
        <div>
          <h3>Hioki Sushi</h3>
          <p>
            4.9 <Star />
          </p>
        </div>
        <p>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis
          deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e
          qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!
        </p>
        <Button onClick={() => navigate('/restaurant')}>Saiba Mais</Button>
      </Infos>
    </Card>
  )
}

export default CardRestaurants
