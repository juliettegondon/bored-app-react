//@flow
import { observable } from 'mobx'

export default class ActivityModel {
  @observable
  key: string

  @observable
  activity: string

  @observable
  accessibility: number

  @observable
  participants: number

  @observable
  price: string

  @observable
  type: string

  constructor(attributes: {}) {
    Object.assign(this, attributes)
  }
}
