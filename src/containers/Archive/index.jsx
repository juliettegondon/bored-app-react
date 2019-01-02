//@flow
import React from 'react'
import { observable, action } from 'mobx'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import ActivitiesStore from 'stores/ActivitiesStore'
import Icon from 'components/Icon'
import ArchivedActivitiesList from 'components/ArchivedActivitiesList'
import { COLORS } from '../../constants'

const StyledArchive = styled.div``

const StyledArchiveActivities = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  width: 16em;
  height: 100%;
  border-right: solid 1px ${COLORS.highlighted};
  box-shadow: 3px 0px 8px 0px rgba(0, 0, 0, 0.3);
  overflow: scroll;
`

const StyledIcon = styled(Icon)`
  margin-left: 0.3em;
  margin-top: 0.3em;
  font-size: 3em;
  opacity: 0.4;
  cursor: pointer;

  &:hover {
    opacity: 1;
    color: ${COLORS.highlighted};
  }
`

const StyledTitle = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  justify-content: space-between;
  display: flex;
  align-items: center;
  font-size: 1.5em;
  color: ${COLORS.highlighted};
  padding: 0.5em;
  border-bottom: solid 1px ${COLORS.highlighted};
  cursor: pointer;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
`

const StyledArchivedActivities = styled.div`
  padding-top: 0.5em;
`

type Props = {
  activitiesStore: ActivitiesStore
}

@inject('activitiesStore')
@observer
class Activity extends React.Component<Props> {
  @observable
  showActivities: boolean = false

  @action
  toogleShowActivities = () => {
    this.showActivities = !this.showActivities
  }

  render() {
    const { activitiesStore } = this.props
    return (
      <StyledArchive>
        {!this.showActivities && (
          <StyledIcon
            icon="archive"
            onClick={() => this.toogleShowActivities()}
          />
        )}
        {this.showActivities && (
          <StyledArchiveActivities>
            <StyledTitle onClick={() => this.toogleShowActivities()}>
              <span>Archived Activities</span>
              <Icon icon="chevron-left" />
            </StyledTitle>
            <StyledArchivedActivities>
              <ArchivedActivitiesList
                activities={activitiesStore.archivedActivity}
              />
            </StyledArchivedActivities>
          </StyledArchiveActivities>
        )}
      </StyledArchive>
    )
  }
}

export default Activity
