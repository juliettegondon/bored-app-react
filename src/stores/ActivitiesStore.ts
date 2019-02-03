import { IFilterParams } from 'api'
import { action, computed, observable } from 'mobx'
import ActivityModel from 'models/ActivityModel'
import RootStore from '.'

export default class ActivitiesStore {
  public rootStore: RootStore
  public filter: IFilterParams = {}

  @observable
  public currentActivity: ActivityModel

  @observable
  public activities: Map<string, ActivityModel> = new Map()

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @computed
  get archivedActivity(): ActivityModel[] {
    return [...this.activities].map(([k, v]) => v) // eslint-disable-line no-unused-vars
  }

  @action
  public setFilter = (filter: IFilterParams) => {
    this.filter = filter
  }

  @action
  public setCurrentActivity = (activity: ActivityModel) => {
    this.currentActivity = activity
  }

  @action
  public addActivity = (activity: ActivityModel) => {
    this.activities.set(activity.key, activity)
  }

  public fetchRandomActivity = (): Promise<any> => {
    const { api } = this.rootStore
    // @ts-ignore
    return api.fetchActivity(this.filter).then(({ data }) => {
      if (data.error) {
        return console.log('[API Error]:', data.error) // tslint:disable-line:no-console
      }

      const newActivity = new ActivityModel(data)
      this.setCurrentActivity(newActivity)
      this.addActivity(newActivity)
    })
  }
}
