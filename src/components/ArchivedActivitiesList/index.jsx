//@flow
import React, { type Node } from 'react'
import styled from 'styled-components'
import ActivityModel from 'models/ActivityModel'
import Activity from 'components/Activity'

const StyledArchivedActivitiesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledActivity = styled(Activity)`
  margin-bottom: 0.5em;
  font-size: 0.5em;
`

type Props = {
  activities?: Array<ActivityModel>
}

export default class ArchivedActivitiesList extends React.PureComponent<Props> {
  renderArchivedActivity = (activity: ActivityModel, index: number): Node => (
    <StyledActivity key={`archived-${index}`} activity={activity} />
  )

  render() {
    const { activities } = this.props
    return (
      <StyledArchivedActivitiesList>
        {activities && activities.map(this.renderArchivedActivity)}
      </StyledArchivedActivitiesList>
    )
  }
}
