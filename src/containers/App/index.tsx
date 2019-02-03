import Archive from 'containers/Archive'
import NewActivity from 'containers/NewActivity'
import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../constants'

const StyledApp = styled.div`
  background-color: ${COLORS.dark};
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

class App extends React.Component<{}> {
  public render() {
    return (
      <StyledApp>
        <Archive />
        <NewActivity />
      </StyledApp>
    )
  }
}

export default App
