//@flow
import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import { ACTIVITY_TYPES, COLORS } from '../../constants'

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const activityTypesOptions = Object.keys(ACTIVITY_TYPES).map(key => ({
  value: ACTIVITY_TYPES[key],
  label: capitalizeFirstLetter(ACTIVITY_TYPES[key])
}))

const customStyles = {
  clearIndicator: provided => ({
    ...provided,
    color: COLORS.highlighted,
    '&:hover': {
      color: COLORS.red
    }
  }),
  control: provided => ({
    ...provided,
    backgroundColor: COLORS.dark,
    borderColor: COLORS.highlighted,
    '&:hover': {
      cursor: 'pointer',
      borderColor: COLORS.highlighted
    }
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: COLORS.highlighted,
    '&:hover': {
      color: COLORS.highlighted
    }
  }),
  indicatorSeparator: provided => ({
    ...provided,
    background: COLORS.highlighted
  }),
  placeholder: provided => ({
    ...provided,
    color: COLORS.highlighted,
    opacity: 0.7
  }),
  singleValue: provided => ({ ...provided, color: COLORS.highlighted })
}

const StyledTypeSelect = styled.div`
  flex: 1;
`

type Props = {}

export default class TypeSelect extends React.PureComponent<Props> {
  render() {
    return (
      <StyledTypeSelect>
        <Select
          {...this.props}
          options={activityTypesOptions}
          menuPlacement="top"
          isClearable
          styles={customStyles}
        />
      </StyledTypeSelect>
    )
  }
}
