import React from 'react'
import { render } from 'react-dom'
import DevTools from 'mobx-react-devtools'
import { Provider } from 'mobx-react'

import App from './containers/App'
import RootStore from './stores'

const rootStore = new RootStore()

render(
  <div>
    <DevTools />
    <Provider {...rootStore}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
)
