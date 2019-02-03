import axios from 'utilities/axios'
import { API_URL } from './constants'

export interface IFilterParams {
  minaccessibility?: number
  maxaccessibility?: number
  minprice?: number
  maxprice?: number
  participants?: number
  type?: string
}

function printError(error: Error): Error {
  // console.error('api-error:', error)
  return error
}

export default class Api {
  public fetchActivity = (params: IFilterParams) => {
    return axios.get(API_URL, { params }).catch(printError)
  }
}
