import { GlobalStyle } from './globalStyles'
import { BrowserRouter } from 'react-router-dom'

import PageRoutes from './routes'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <PageRoutes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
