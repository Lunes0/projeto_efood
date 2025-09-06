import { useNavigate } from 'react-router-dom'

import type { Restaurants } from '../../pages/Home/index'

import { Banner, Button, Card, Infos, TagsContainer } from './styles'
import Star from '../../assets/icons/star'

type Props = {
  restaurants: Restaurants[]
}

const CardRestaurants = ({ restaurants }: Props) => {
  const navigate = useNavigate()

  return (
    <>
      {restaurants.map((restaurant) => (
        <Card key={restaurant.id}>
          <Banner>
            <img src={restaurant.capa} alt={restaurant.titulo} />
            <TagsContainer>
              {restaurant.destacado && <h4>Destaque da semana</h4>}
              <h4>{restaurant.tipo}</h4>
            </TagsContainer>
          </Banner>
          <Infos>
            <div>
              <h3>{restaurant.titulo}</h3>
              <span>
                {restaurant.avaliacao} <Star />
              </span>
            </div>
            <p>{restaurant.descricao}</p>
            <Button onClick={() => navigate(`/restaurant/${restaurant.id}`)}>Saiba Mais</Button>
          </Infos>
        </Card>
      ))}
    </>
  )
}

export default CardRestaurants
