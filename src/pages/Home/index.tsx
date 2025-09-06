import Header from '../../components/Header'
import MainLayout from '../../components/MainLayout'
import CardRestaurants from '../../components/CardRestaurants'

import { HomeContainer } from './styles'
import { useGetRestaurantsQuery } from '../../services/api'

export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

export type Dish = {
  nome: string
  descricao: string
  preco: number
  foto: string
  porcao: string
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <MainLayout header={<Header type="home" />}>
          <div className="container">
            <HomeContainer>
              <CardRestaurants restaurants={restaurants} />
            </HomeContainer>
          </div>
        </MainLayout>
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
