//@flow
import React from 'react'
import styled from 'styled-components'
import { Range, createSliderWithTooltip } from 'rc-slider'
import 'rc-slider/assets/index.css'
import { getHandleStyle, getTrackStyle } from './styles'

const RangeWithTooltip = createSliderWithTooltip(Range)

const StyledFilterRange = styled.div`
  flex: 1;
  padding: 0 7px;
`

function percentFormatter(v: string) {
  return `${v} %`
}

type Props = { color?: string }

export default class FilterRange extends React.PureComponent<Props> {
  render() {
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
