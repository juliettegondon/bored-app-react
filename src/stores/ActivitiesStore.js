//@flow
import { observable, action, computed } from 'mobx'
import RootStore from '.'
import ActivityModel from 'models/ActivityModel'

export default class ActivitiesStore {
  rootStore: RootStore

  @observable
  activities: Array<ActivityModel> = []

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @computed
  get lastActivity(): ActivityModel {
    if (this.activities.length <= 0) {
      this.fetchRandomActivity()
      return new ActivityModel({})
    }
    return this.activities.slice(-1)[0]
  }

  @computed
  get archivedActivity(): Array<ActivityModel> {
    if (this.activities.length <= 0) {
      this.fetchRandomActivity()
      return []
    }
    return this.activities.slice(0, this.activities.length - 1)
  }

  @action
  addActivity = (activity: ActivityModel) => {
    this.activities = [...this.activities, activity]
  }

  fetchRandomActivity = (): Promise<*> => {
    const { api } = this.rootStore
    return api.fetchActivity().then(({ data }) => {
      this.addActivity(new ActivityModel(data))
    })
  }
}
