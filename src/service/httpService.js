'use strict'

import axios from 'axios'

const HttpService = class {
  constructor () {
    console.log('[HttpService] init')

    this._http = axios.create({
      baseURL: 'http://localhost:3000',
      timeout: 20000
    })
  }

  _get (url, config) {
    return new Promise((resolve, reject) => {
      this._http.get(url, config)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  _post (url, data, config) {
    return new Promise((resolve, reject) => {
      this._http.post(url, data, config)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  _put (url, data, config) {
    return new Promise((resolve, reject) => {
      this._http.put(url, data, config)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  _delete (url, config) {
    return new Promise((resolve, reject) => {
      this._http.get(url, config)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default HttpService
