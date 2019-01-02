//@flow
import { observable } from 'mobx'

export default class ActivityModel {
  @observable
  key: string = ''

  @observable
  activity: string = ''

  @observable
  accessibility: number = 0

  @observable
  participants: number = 0

  @observable
  price: string = '0'

  @observable
  type: string = 'education'

  constructor(attributes: {}) {
    Object.assign(this, attributes)
  }
}
