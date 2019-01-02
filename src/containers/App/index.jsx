import React from 'react'
import styled from 'styled-components'
import Archive from 'containers/Archive'
import NewActivity from 'containers/NewActivity'
import { COLORS } from '../../constants'

const StyledApp = styled.div`
  background-color: ${COLORS.dark};
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

type Props = {}

class App extends React.Component<Props> {
  render() {
    return (
      <StyledApp>
        <Archive />
        <NewActivity />
      </StyledApp>
    )
  }
}

export default App
