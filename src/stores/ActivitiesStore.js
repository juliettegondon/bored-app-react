//@flow
import { observable, action } from 'mobx'
import RootStore from '.'
import ActivityModel from 'models/ActivityModel'

export default class ActivitiesStore {
  rootStore: RootStore

  @observable
  activities: Array<ActivityModel> = []

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @action
  addActivity = (activity: ActivityModel) => {
    this.activities = [...this.activities, activity]
  }

  fetchRandomActivity = () => {
    const { api } = this.rootStore
    return api.fetchActivity().then(({ data }) => {
      this.addActivity(new ActivityModel(data))
    })
  }
}
