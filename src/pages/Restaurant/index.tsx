import Header from '../../components/Header'
import MainLayout from '../../components/MainLayout'

import sushi from '../../assets/images/sushi.png'

const Restaurant = () => (
  <>
    <MainLayout header={<Header type="restaurant" restaurantImage={sushi} />}></MainLayout>
  </>
)

export default Restaurant
