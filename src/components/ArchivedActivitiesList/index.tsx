import Activity from 'components/Activity'
import ActivityModel from 'models/ActivityModel'
import React from 'react'
import styled from 'styled-components'

const StyledArchivedActivitiesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledActivity = styled(Activity)`
  margin-bottom: 0.5em;
  font-size: 0.5em;
`

interface IProps {
  activities?: ActivityModel[]
}

export default class ArchivedActivitiesList extends React.PureComponent<
  IProps
> {
  public renderArchivedActivity = (
    activity: ActivityModel,
    index: number
  ): React.ReactNode => (
    <StyledActivity key={`archived-${index}`} activity={activity} />
  )

  public render() {
    const { activities } = this.props
    return (
      <StyledArchivedActivitiesList>
        {activities && activities.map(this.renderArchivedActivity)}
      </StyledArchivedActivitiesList>
    )
  }
}
