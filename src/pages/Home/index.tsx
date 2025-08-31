import Header from '../../components/Header'
import MainLayout from '../../components/MainLayout'

import { HomeContainer } from './styles'
import CardRestaurants from '../../components/CardRestaurants'

const Home = () => (
  <>
    <MainLayout header={<Header type="home" />}>
      <div className="container">
        <HomeContainer>
          <li>
            <CardRestaurants />
          </li>
          <li>
            <CardRestaurants />
          </li>
          <li>
            <CardRestaurants />
          </li>
          <li>
            <CardRestaurants />
          </li>
          <li>
            <CardRestaurants />
          </li>
          <li>
            <CardRestaurants />
          </li>
        </HomeContainer>
      </div>
    </MainLayout>
  </>
)

export default Home
