import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../constants'

const StyledButton = styled.div`
  color: black;
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  position: relative;
  overflow: hidden;
  padding: 0.8em;
  box-shadow: inset 0 0 0 4px black;
  border-radius: 0.5em;
  opacity: 0.4;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;

  &:hover {
    opacity: 1;
    color: ${COLORS.highlighted};
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.5);
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  }

  &:active {
    color: black;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: inset 0 0 0 4px black;
    text-shadow: 0 0 0;
    opacity: 0.4;
    transition-property: all;
    transition-duration: 0s;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-color: ${COLORS.highlighted};
    border-style: solid;
    border-width: 0;
    border-radius: 0.5em;
    transition-property: all;
    transition-duration: 0.2s;
    transition-timing-function: ease-out;
  }
  &:hover:before {
    border-width: 4px;
  }

  &:active:before {
    border-width: 0;
    transition-property: all;
    transition-duration: 0s;
  }
`

interface IProps {
  children?: React.ReactNode
  className?: string
  onClick: () => void
}

export default class Button extends React.PureComponent<IProps> {
  public render() {
    const { onClick, children, className } = this.props
    return (
      <StyledButton className={className} onClick={onClick}>
        {children}
      </StyledButton>
    )
  }
}
