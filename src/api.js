//@flow
import { API_URL } from './constants'
import axios from 'utilities/axios'

function printError(error: Error): Error {
  // console.error('api-error:', error)
  return error
}

export default class Api {
  fetchActivity = (
    minaccessibility?: number,
    maxaccessibility?: number,
    minprice?: number,
    maxprice?: number,
    participants?: number,
    type?: string
  ) => {
    return axios
      .get(API_URL, {
        params: {
          minaccessibility,
          maxaccessibility,
          minprice,
          maxprice,
          participants,
          type
        }
      })
      .catch(printError)
  }
}
