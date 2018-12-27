//@flow
import React from 'react'
import { inject, observer } from 'mobx-react'

type Props = {
  activitiesStore: {}
}

@inject('activitiesStore')
@observer
class App extends React.Component<Props> {
  render() {
    const { activitiesStore } = this.props
    return (
      <>
        <button onClick={() => activitiesStore.fetchRandomActivity()}>
          test
        </button>
        <div>{JSON.stringify(activitiesStore.activities)}</div>
      </>
    )
  }
}

export default App
