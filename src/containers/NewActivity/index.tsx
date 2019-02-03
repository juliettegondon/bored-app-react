import Activity from 'components/Activity'
import Button from 'components/Button'
import Filters from 'components/Filters'
import { inject, observer } from 'mobx-react'
import React from 'react'
import ActivitiesStore from 'stores/ActivitiesStore'
import styled from 'styled-components'

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

interface IProps {
  activitiesStore?: ActivitiesStore
}

@inject('activitiesStore')
@observer
class NewActivity extends React.Component<IProps> {
  public componentDidMount() {
    this.props.activitiesStore!.fetchRandomActivity()
  }

  public handleFilterChange = (filter: {}) => {
    this.props.activitiesStore!.setFilter(filter)
  }

  public render() {
    const { activitiesStore } = this.props
    return (
      <StyledNewActivity>
        {activitiesStore!.currentActivity && (
          <Activity activity={activitiesStore!.currentActivity} />
        )}
        <StyledButtonContainer>
          {/* tslint:disable-next-line:jsx-no-lambda */}
          <Button onClick={() => activitiesStore!.fetchRandomActivity()}>
            NEW ACTIVITY
          </Button>
          <Filters onFilterChange={activitiesStore!.setFilter} />
        </StyledButtonContainer>
      </StyledNewActivity>
    )
  }
}

export default NewActivity
