import { createSliderWithTooltip, Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import React from 'react'
import styled from 'styled-components'
import { getHandleStyle, getTrackStyle } from './styles'

const RangeWithTooltip = createSliderWithTooltip(Range)

const StyledFilterRange = styled.div`
  flex: 1;
  padding: 0 7px;
`

function percentFormatter(v: string | number): React.ReactNode {
  return `${v} %`
}

interface IProps {
  min?: number
  max?: number
  color?: string
  defaultValue?: number[]
  onAfterChange: (value: number[]) => void
}

export default class FilterRange extends React.PureComponent<IProps> {
  public render() {
    const { color } = this.props
    return (
      <StyledFilterRange>
        <RangeWithTooltip
          {...this.props}
          tipFormatter={percentFormatter}
          handleStyle={getHandleStyle(color)}
          trackStyle={[getTrackStyle(color)]}
        />
      </StyledFilterRange>
    )
  }
}
