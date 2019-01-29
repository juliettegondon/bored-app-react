//@flow
import { API_URL } from './constants'
import axios from 'utilities/axios'

export type FilterParams = {
  minaccessibility?: number,
  maxaccessibility?: number,
  minprice?: number,
  maxprice?: number,
  participants?: number,
  type?: string
}

function printError(error: Error): Error {
  // console.error('api-error:', error)
  return error
}

export default class Api {
  fetchActivity = (params: FilterParams) => {
    return axios.get(API_URL, { params }).catch(printError)
  }
}
