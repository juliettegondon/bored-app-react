//@flow
import React from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import Activity from 'components/Activity'
import Button from 'components/Button'
import Filters from 'components/Filters'
import ActivitiesStore from 'stores/ActivitiesStore'

const StyledNewActivity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
`

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 24em;
  margin: 1em;
  flex-direction: column;

  & > * {
    margin-top: 1em;
  }

  & > *:first-child {
    margin-top: 0;
  }
`

type Props = {
  activitiesStore: ActivitiesStore
}

@inject('activitiesStore')
@observer
class NewActivity extends React.Component<Props> {
  componentDidMount() {
    this.props.activitiesStore.fetchRandomActivity()
  }

  handleFilterChange = (filter: {}) => {
    this.props.activitiesStore.setFilter(filter)
  }

  render() {
    const { activitiesStore } = this.props
    return (
      <StyledNewActivity>
        {activitiesStore.currentActivity && (
          <Activity activity={activitiesStore.currentActivity} />
        )}
        <StyledButtonContainer>
          <Button onClick={() => activitiesStore.fetchRandomActivity()}>
            NEW ACTIVITY
          </Button>
          <Filters onFilterChange={activitiesStore.setFilter} />
        </StyledButtonContainer>
      </StyledNewActivity>
    )
  }
}

export default NewActivity
