//@flow
import React from 'react'
import styled, { keyframes } from 'styled-components'
import Icon from 'components/Icon'

const StyledMetaInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5em;
  height: 4.5em;
`

const InnerCircle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 50%;
  width: 80%;
  height: 60%;
  opacity: 0.7;
`
const StyledLabel = styled.span`
  font-size: 0.8em;
  text-overflow: ellipsis;
  text-align: center;
  overflow: hidden;
  max-width: 100%;
`

const StyledSvgContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

const StyledSvg = styled.svg`
  & .backgroundCircle {
    fill: none;
    stroke: rgba(0, 0, 0, 0.2);
    stroke-width: 1;
    stroke-dasharray: 100, 100;
  }

  & .progressCircle {
    fill: none;
    stroke: ${props => props.progressColor || 'rgba(0, 0, 0, 0.5)'};
    stroke-width: 2;
    stroke-dasharray: ${props => props.progressPercentage} 100;
    animation: ${props => fill(props.progressPercentage)} 1s ease-out;
  }
`

const fill = (progress: number | string) => keyframes`
  from {
    stroke-dasharray: 0, 100;
  }
  to {
    stroke-dasharray: ${progress}, 100;
  }
`

type Props = {
  label?: string,
  icon?: string,
  value?: number | string,
  progress?: number | string,
  progressColor?: string
}

export default class MetaInfo extends React.PureComponent<Props> {
  render() {
    const { label, progress, progressColor, value, icon } = this.props
    const progressPercentage = Math.round(Number(progress) * 100)

    return (
      <StyledMetaInfo data-tip={label || undefined}>
        <StyledSvgContainer>
          <StyledSvg
            viewBox="0 0 36 36"
            progressColor={progressColor}
            progressPercentage={progressPercentage}
          >
            <path
              className="backgroundCircle"
              d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="progressCircle"
              d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </StyledSvg>
        </StyledSvgContainer>
        <InnerCircle>
          {icon && <Icon icon={icon} />}
          <StyledLabel>{value || `${progressPercentage}%`}</StyledLabel>
        </InnerCircle>
      </StyledMetaInfo>
    )
  }
}
