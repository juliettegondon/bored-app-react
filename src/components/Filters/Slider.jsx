//@flow
import React from 'react'
import styled from 'styled-components'
import Slider, { createSliderWithTooltip } from 'rc-slider'
import 'rc-slider/assets/index.css'
import { getHandleStyle, getTrackStyle } from './styles'

const SliderWithTooltip = createSliderWithTooltip(Slider)

const StyledFilterSlider = styled.div`
  flex: 1;
  padding: 0 7px;
`

type Props = { color?: string }

export default class FilterSlider extends React.PureComponent<Props> {
  render() {
    const { color } = this.props
    return (
      <StyledFilterSlider>
        <SliderWithTooltip
          {...this.props}
          handleStyle={getHandleStyle(color)}
          trackStyle={[getTrackStyle(color)]}
        />
      </StyledFilterSlider>
    )
  }
}
