import Api from 'api'
import ActivitiesStore from './ActivitiesStore'

export default class RootStore {
  public api: Api
  public activitiesStore: ActivitiesStore

  constructor() {
    this.api = new Api()
    this.activitiesStore = new ActivitiesStore(this)
  }
}
