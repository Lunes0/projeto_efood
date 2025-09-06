import { useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import MainLayout from '../../components/MainLayout'
import CardDishes from '../../components/CardDishes'
import Modal from '../../components/Modal'

import { DishesContainer } from './styles'
import { useGetRestaurantQuery } from '../../services/api'

type Dish = {
  nome: string
  descricao: string
  preco: number
  foto: string
  porcao: string
}

const Restaurant = () => {
  const { id } = useParams()
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDish, setSelectedDish] = useState<null | Dish>(null)

  const openModal = (dish: Dish) => {
    setSelectedDish(dish)
    setModalOpen(true)
  }
  const closeModal = () => setModalOpen(false)

  const { data: restaurant } = useGetRestaurantQuery(id!)

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      {modalOpen && selectedDish && <Modal onClose={closeModal} dish={selectedDish} />}
      <MainLayout
        header={
          <Header
            name={restaurant.titulo}
            category={restaurant.tipo}
            type="restaurant"
            restaurantImage={restaurant.capa}
          />
        }
      >
        <div className="container">
          <DishesContainer>
            {restaurant.cardapio.map((dish) => (
              <li key={dish.id}>
                <CardDishes
                  image={dish.foto}
                  description={dish.descricao}
                  name={dish.nome}
                  price={dish.preco}
                  onAddToCart={() => openModal(dish)}
                />
              </li>
            ))}
          </DishesContainer>
        </div>
      </MainLayout>
    </>
  )
}

export default Restaurant
