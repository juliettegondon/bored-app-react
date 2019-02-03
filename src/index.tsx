import { Provider } from 'mobx-react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './containers/App'
import RootStore from './stores'

const rootStore = new RootStore()

ReactDOM.render(
  <div>
    <Provider {...rootStore}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root') as HTMLElement
)
