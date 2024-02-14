import { Provider } from 'react-redux'

import { Router } from '@/app/provider/router'
import { store } from '@/app/store'

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
