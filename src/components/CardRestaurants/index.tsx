import { useNavigate } from 'react-router-dom'

import Star from '../../assets/icons/star'
import type { Restaurants } from '../../pages/Home/index'

import * as S from './styles'

type Props = {
  restaurants: Restaurants[]
}

const CardRestaurants = ({ restaurants }: Props) => {
  const navigate = useNavigate()

  return (
    <>
      {restaurants.map((restaurant) => (
        <S.Card key={restaurant.id}>
          <S.Banner>
            <img src={restaurant.capa} alt={restaurant.titulo} />
            <S.TagsContainer>
              {restaurant.destacado && <h4>Destaque da semana</h4>}
              <h4>{restaurant.tipo}</h4>
            </S.TagsContainer>
          </S.Banner>
          <S.Infos>
            <div>
              <h3>{restaurant.titulo}</h3>
              <span>
                {restaurant.avaliacao} <Star />
              </span>
            </div>
            <p>{restaurant.descricao}</p>
            <S.Button onClick={() => navigate(`/restaurant/${restaurant.id}`)}>Saiba Mais</S.Button>
          </S.Infos>
        </S.Card>
      ))}
    </>
  )
}

export default CardRestaurants
