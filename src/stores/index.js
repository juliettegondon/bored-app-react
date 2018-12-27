//@flow
import Api from 'api'
import ActivitiesStore from './ActivitiesStore'

export default class RootStore {
  api: Api
  activitiesStore: ActivitiesStore

  constructor() {
    this.api = new Api()
    this.activitiesStore = new ActivitiesStore(this)
  }
}
