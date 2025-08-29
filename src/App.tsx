import { GlobalStyle } from './globalStyles'
import { BrowserRouter } from 'react-router-dom'

import PageRoutes from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <PageRoutes />
    </BrowserRouter>
  )
}

export default App
