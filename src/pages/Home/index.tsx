import Header from '../../components/Header'
import MainLayout from '../../components/MainLayout'

import sushi from '../../assets/images/sushi.png'
import { HomeContainer } from './styles'

const Home = () => (
  <>
    <MainLayout header={<Header type="home" />}>
      <div className="container">
        <HomeContainer>
          <li>
            <img src={sushi} />
          </li>
          <li>
            <img src={sushi} />
          </li>
          <li>
            <img src={sushi} />
          </li>
          <li>
            <img src={sushi} />
          </li>
          <li>
            <img src={sushi} />
          </li>
          <li>
            <img src={sushi} />
          </li>
        </HomeContainer>
      </div>
    </MainLayout>
  </>
)

export default Home
