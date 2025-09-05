import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import MainLayout from '../../components/MainLayout'
import CardRestaurants from '../../components/CardRestaurants'

import { HomeContainer } from './styles'

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

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

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

export default Home
