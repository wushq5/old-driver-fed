'use strict'

import axios from 'axios'

const HttpService = class {
  constructor () {
    console.log('[HttpService] init')

    this._http = axios.create({
      baseURL: 'http://localhost:3000',
      timeout: 20000
    })

    // interceptors
    this._http.interceptors.response.use(res => {
      if (!this._http.defaults.headers.common['Authorization'] && res.data.token) {
        this._http.defaults.headers.common['Authorization'] = res.data.token
      }
      return res
    }, err => {
      // Do something with response error
      return Promise.reject(err)
    })
  }

  _get (url, config) {
    return new Promise((resolve, reject) => {
      this._http.get(url, config)
        .then(res => {
          resolve(res)
        })
    })
  }

  _post (url, data, config) {
    return new Promise((resolve, reject) => {
      this._http.post(url, data, config)
        .then(res => {
          resolve(res)
        })
    })
  }

  _put (url, data, config) {
    return new Promise((resolve, reject) => {
      this._http.put(url, data, config)
        .then(res => {
          resolve(res)
        })
    })
  }

  _delete (url, config) {
    return new Promise((resolve, reject) => {
      this._http.get(url, config)
        .then(res => {
          resolve(res)
        })
    })
  }
}

export default HttpService
