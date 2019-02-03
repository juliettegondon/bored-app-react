import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import { ACTIVITY_TYPES, COLORS } from '../../constants'

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const activityTypesOptions = Object.keys(ACTIVITY_TYPES).map(key => ({
  label: capitalize(ACTIVITY_TYPES[key]),
  value: ACTIVITY_TYPES[key]
}))

const customStyles = {
  clearIndicator: (provided: {}) => ({
    ...provided,
    '&:hover': {
      color: COLORS.red
    },
    color: COLORS.highlighted
  }),
  control: (provided: {}) => ({
    ...provided,
    '&:hover': {
      borderColor: COLORS.highlighted,
      cursor: 'pointer'
    },
    backgroundColor: COLORS.dark,
    borderColor: COLORS.highlighted
  }),
  dropdownIndicator: (provided: {}) => ({
    ...provided,
    '&:hover': {
      color: COLORS.highlighted
    },
    color: COLORS.highlighted
  }),
  indicatorSeparator: (provided: {}) => ({
    ...provided,
    background: COLORS.highlighted
  }),
  placeholder: (provided: {}) => ({
    ...provided,
    color: COLORS.highlighted,
    opacity: 0.7
  }),
  singleValue: (provided: {}) => ({ ...provided, color: COLORS.highlighted })
}

const StyledTypeSelect = styled.div`
  flex: 1;
`

interface IProps {
  onChange: (value: { value: string; label: string }) => void
}

export default class TypeSelect extends React.PureComponent<IProps> {
  public render() {
    return (
      <StyledTypeSelect>
        <Select
          {...this.props}
          options={activityTypesOptions}
          menuPlacement="top"
          isClearable={true}
          styles={customStyles}
        />
      </StyledTypeSelect>
    )
  }
}
