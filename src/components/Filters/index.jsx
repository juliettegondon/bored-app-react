//@flow
import React from 'react'
import styled from 'styled-components'

const StyledFilters = styled.div`
  padding: 0.8em;
  box-shadow: inset 0 0 0 4px black;
  border-radius: 0.5em;
  opacity: 0.4;
  display: flex;
  flex-direction: column;
`

type Props = {}

export default class Filters extends React.PureComponent<Props> {
  render() {
    const {} = this.props

    return (
      <StyledFilters>
        <span>price</span>
        <span>accesibility</span>
        <span>participants</span>
        <span>type</span>
        <span>key</span>
      </StyledFilters>
    )
  }
}
