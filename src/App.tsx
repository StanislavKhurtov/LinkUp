import { Provider } from 'react-redux'

import { Layout } from '@/components/ui/layout/layout'
import { Router } from '@/router'
import { store } from '@/services/store'

export function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Router />
      </Layout>
    </Provider>
  )
}

{
  /*  <Player srcList={[]} />
      <div>Hello</div>
      <Button as={'a'} href={'http://yandex.ru'} rel={'noopener noreferrer'} target={'_blank'}>
        Link
      </Button>*/
}
