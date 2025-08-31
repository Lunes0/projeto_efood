import Header from '../../components/Header'
import MainLayout from '../../components/MainLayout'

import sushi from '../../assets/images/sushi.png'
import { DishesContainer } from './styles'
import CardDishes from '../../components/CardDishes'

const Restaurant = () => {
  return (
    <>
      <MainLayout header={<Header type="restaurant" restaurantImage={sushi} />}>
        <div className="container">
          <DishesContainer>
            <li>
              <CardDishes />
            </li>
            <li>
              <CardDishes />
            </li>
            <li>
              <CardDishes />
            </li>
            <li>
              <CardDishes />
            </li>
            <li>
              <CardDishes />
            </li>
            <li>
              <CardDishes />
            </li>
          </DishesContainer>
        </div>
      </MainLayout>
    </>
  )
}

export default Restaurant
