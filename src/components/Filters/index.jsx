//@flow
import React from 'react'
import { observable, action } from 'mobx'
import styled from 'styled-components'
import { COLORS } from '../../constants'
import TypeSelect from './TypeSelect'
import Range from './Range'
import Slider from './Slider'

const StyledFilters = styled.div`
  padding: 0.8em;
  box-shadow: inset 0 0 0 4px rgba(0, 0, 0, 0.4);
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
`

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  height: 2.5em;
`

const StyledFilterLabel = styled.span`
  flex-basis: 40%;
  color: ${COLORS.highlighted};
`

type Props = {
  onFilterChange: (filter: {}) => void
}

export default class Filters extends React.PureComponent<Props> {
  @observable filter: {} = {}

  @action
  setFilter = (newFilterProps: {}) => {
    this.filter = { ...this.filter, ...newFilterProps }
    this.props.onFilterChange(this.filter)
  }

  handlePriceChange = (price: Array<number>) => {
    this.setFilter({
      minprice: price[0] / 100,
      maxprice: price[1] / 100
    })
  }

  handleAccesibilityChange = (accesibility: Array<number>) => {
    this.setFilter({
      minaccesibility: accesibility[0] / 100,
      maxaccesibility: accesibility[1] / 100
    })
  }

  handleParticipantsChange = (participants: number) => {
    if (participants === 0) {
      this.setFilter({ participants: null })
      return
    }
    this.setFilter({ participants })
  }

  handleTypeChange = (value: { value: string, label: string }) => {
    if (!value) {
      this.setFilter({ type: null })
      return
    }
    this.setFilter({ type: value.value })
  }

  render() {
    return (
      <StyledFilters>
        <StyledFilter>
          <StyledFilterLabel>Price:</StyledFilterLabel>
          <Range
            color={COLORS.red}
            onAfterChange={this.handlePriceChange}
            min={0}
            max={100}
            defaultValue={[0, 100]}
          />
        </StyledFilter>
        <StyledFilter>
          <StyledFilterLabel>Accesibility:</StyledFilterLabel>
          <Range
            color={COLORS.greenLight}
            onAfterChange={this.handleAccesibilityChange}
            min={0}
            max={100}
            defaultValue={[0, 100]}
          />
        </StyledFilter>
        <StyledFilter>
          <StyledFilterLabel>Participants:</StyledFilterLabel>
          <Slider
            onAfterChange={this.handleParticipantsChange}
            min={0}
            max={8}
          />
        </StyledFilter>
        <StyledFilter>
          <StyledFilterLabel>Type:</StyledFilterLabel>
          <TypeSelect onChange={this.handleTypeChange} />
        </StyledFilter>
      </StyledFilters>
    )
  }
}
