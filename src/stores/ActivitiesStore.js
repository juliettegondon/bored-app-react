//@flow
import { observable, action, computed } from 'mobx'
import RootStore from '.'
import type { FilterParams } from 'api'
import ActivityModel from 'models/ActivityModel'

export default class ActivitiesStore {
  rootStore: RootStore
  filter: FilterParams = {}

  @observable
  currentActivity: ActivityModel

  @observable
  activities: Map<string, ActivityModel> = new Map()

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  /*@computed
  get lastActivity(): ActivityModel {
    if (this.activities.length <= 0) {
      this.fetchRandomActivity()
      return new ActivityModel({})
    }
    return this.activities.slice(-1)[0]
  }*/

  @computed
  get archivedActivity(): Array<ActivityModel> {
    return [...this.activities].map(([k, v]) => v) // eslint-disable-line no-unused-vars
  }

  @action
  setFilter = (filter: FilterParams) => {
    this.filter = filter
  }

  @action
  setCurrentActivity = (activity: ActivityModel) => {
    this.currentActivity = activity
  }

  @action
  addActivity = (activity: ActivityModel) => {
    this.activities.set(activity.key, activity)
  }

  fetchRandomActivity = (): Promise<*> => {
    const { api } = this.rootStore
    return api.fetchActivity(this.filter).then(({ data }) => {
      if (data.error) return console.log('[API Error]:', data.error) // eslint-disable-line no-console

      const newActivity = new ActivityModel(data)
      this.setCurrentActivity(newActivity)
      this.addActivity(newActivity)
    })
  }
}
