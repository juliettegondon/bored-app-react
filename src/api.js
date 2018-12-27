//@flow
import { API_URL } from './constants'
import axios from 'axios'

const api = axios.create({
  timeout: 1000
})

function printError(error: Error): Promise<*> {
  // console.error('api-error:', error)
  return new Promise.reject(error)
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
    return api
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
