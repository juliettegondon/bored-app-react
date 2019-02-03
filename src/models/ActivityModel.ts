import { observable } from 'mobx'

export default class ActivityModel {
  @observable
  public key: string = ''

  @observable
  public activity: string = ''

  @observable
  public accessibility: number = 0

  @observable
  public participants: number = 0

  @observable
  public price: string = '0'

  @observable
  public type: string = 'education'

  constructor(attributes: {}) {
    Object.assign(this, attributes)
  }
}
