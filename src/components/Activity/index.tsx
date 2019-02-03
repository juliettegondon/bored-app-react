import Icon from 'components/Icon'
import MetaInfo from 'components/MetaInfo'
import ActivityModel from 'models/ActivityModel'
import React from 'react'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import { ACTIVITY_ICONS, COLORS } from '../../constants'

const StyledActivity = styled.div`
  position: relative;
  background-color: ${COLORS.highlighted};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20em;
  height: 20em;
  padding: 2em;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);
`

const StyledActivityText = styled.div`
  display: flex;
  flex: 1;
  max-width: 10em;
  text-align: center;
  align-self: center;
  align-items: center;
  font-size: 2em;
`

const StyledActivityInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const StyledIconContainer = styled.div`
  font-size: 4em;
  text-align: center;
  opacity: 0.2;
`

const StyledActivityKey = styled.div`
  position: absolute;
  right: 1em;
  top: 1em;
  opacity: 0.2;
`

const StyledParticipantsContainer = styled.div`
  position: absolute;
  left: 1em;
  top: 1em;
  opacity: 0.2;

  & > * {
    margin-left: 0.2em;
  }

  & > *:first-child {
    margin-left: 0;
  }
`

interface IProps {
  activity: ActivityModel
  className?: string
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default class Activity extends React.PureComponent<IProps> {
  public renderParticipants = (): React.ReactNode => {
    const { activity } = this.props
    const renderedParticipants = []
    for (let i = 0; i < activity.participants; i++) {
      renderedParticipants.push(<Icon key={`participant-${i}`} icon="user" />)
    }
    return renderedParticipants
  }

  public render() {
    const { activity, className } = this.props
    return (
      <StyledActivity className={className}>
        <ReactTooltip place="top" type="dark" effect="solid" />
        <StyledActivityKey data-tip="Activity Key">
          {activity.key}
        </StyledActivityKey>
        <StyledParticipantsContainer>
          {this.renderParticipants()}
        </StyledParticipantsContainer>
        <StyledIconContainer>
          <Icon
            data-tip={capitalize(activity.type)}
            icon={ACTIVITY_ICONS[activity.type]}
          />
        </StyledIconContainer>
        <StyledActivityText>{activity.activity}</StyledActivityText>
        <StyledActivityInfos>
          <MetaInfo
            icon="money-bill-alt"
            label="Price"
            progress={activity.price}
            progressColor={COLORS.red}
          />
          <MetaInfo
            icon="cogs"
            label="Accessibility"
            progress={activity.accessibility}
            progressColor={COLORS.greenLight}
          />
        </StyledActivityInfos>
      </StyledActivity>
    )
  }
}
